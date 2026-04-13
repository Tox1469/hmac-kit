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
