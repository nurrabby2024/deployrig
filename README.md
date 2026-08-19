# DeployRig

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Build](https://img.shields.io/badge/build-passing-brightgreen.svg) ![PRs](https://img.shields.io/badge/PRs-welcome-orange.svg) ![Maintained](https://img.shields.io/badge/maintained-yes-cyan.svg) ![Platform](https://img.shields.io/badge/platform-cross-platform-purple.svg)

A deployment rig that builds, tests and publishes on tag pushes.

## About

A deployment rig that builds, tests and publishes on tag pushes.

## Features

- Reproducible Docker image with health checks
- Compose setup with restart policy
- Minimal Node service with a JSON API
- Shell backup script included

## Install

```bash
git clone https://github.com/nurrabby2024/deployrig.git
cd deployrig
```

## Usage

```bash
docker compose up --build

# or run the script locally
npm start
```

## License

MIT. See [LICENSE](LICENSE) for details.

## Support

Found a bug or have an idea? Open an issue. Pull requests are always welcome.