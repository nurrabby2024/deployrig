#!/usr/bin/env bash
set -euo pipefail

echo "backup starting: $(date -u +%FT%TZ)"
mkdir -p ./backups
cp -r ./data ./backups/data-$(date +%s) 2>/dev/null || echo "no data dir yet"
echo "backup complete"