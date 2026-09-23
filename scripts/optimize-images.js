import sharp from "sharp";
import { readdirSync, statSync, unlinkSync, copyFileSync } from "fs";
import { join, extname, basename, dirname } from "path";

const DIRS = ["public/images", "src/assets"];
const WEBP_QUALITY = 85;
const MAX_WIDTH = 1600;

let saved = 0;

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return []; }
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

for (const dir of DIRS) {
  for (const input of walk(dir)) {
    const ext = extname(input).toLowerCase();

    if ([".jpg", ".jpeg", ".png"].includes(ext)) {
      const webpPath = join(dirname(input), basename(input, ext) + ".webp");
      const before = statSync(input).size;
      try {
        await sharp(input)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(webpPath);
        const after = statSync(webpPath).size;
        const pct = Math.round((1 - after / before) * 100);
        saved += before - after;
        unlinkSync(input);
        console.log(`✓ ${basename(input)} → .webp  ${kb(before)} → ${kb(after)} (−${pct}%)`);
      } catch (e) {
        try { unlinkSync(webpPath); } catch {}
        console.error(`✗ ${basename(input)}: ${e.message}`);
      }
    } else if (ext === ".webp") {
      const tmp = input + ".opt.tmp";
      const before = statSync(input).size;
      try {
        await sharp(input)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(tmp);
        const after = statSync(tmp).size;
        if (after < before) {
          copyFileSync(tmp, input);
          unlinkSync(tmp);
          const pct = Math.round((1 - after / before) * 100);
          saved += before - after;
          console.log(`✓ ${basename(input)}  ${kb(before)} → ${kb(after)} (−${pct}%)`);
        } else {
          unlinkSync(tmp);
          console.log(`= ${basename(input)}: already optimal (${kb(before)})`);
        }
      } catch (e) {
        try { unlinkSync(tmp); } catch {}
        console.error(`✗ ${basename(input)}: ${e.message}`);
      }
    }
  }
}

console.log(`\nTotal saved: ${kb(saved)}`);

function kb(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}
