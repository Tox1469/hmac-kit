[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/hmac-kit/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/hmac-kit/actions)
[![License](https://img.shields.io/github/license/Tox1469/hmac-kit?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/hmac-kit?style=flat-square)](https://github.com/Tox1469/hmac-kit/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/hmac-kit?style=flat-square)](https://github.com/Tox1469/hmac-kit/stargazers)

---

# hmac-kit

Gera e verifica HMAC com SHA-256 ou SHA-512. Usa comparacao em tempo constante para evitar timing attacks.

## Instalacao

```bash
npm install hmac-kit
```

## Uso

```ts
import { hmacSign, hmacVerify } from "hmac-kit";

const mac = hmacSign("mensagem", "chave-secreta", "sha256");
const ok = hmacVerify("mensagem", mac, "chave-secreta", "sha256");
```

## Seguranca

- Sempre compare MACs com `timingSafeEqual` (ja incluso).
- Use chaves de pelo menos 32 bytes.
- Nao derive chaves HMAC a partir de senhas diretamente — use PBKDF2 ou Argon2 antes.

## Licenca

MIT