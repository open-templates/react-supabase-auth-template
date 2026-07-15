---
type: Feature
title: Auth routes
description: Guest-only and authenticated routes with AuthGuard.
tags: [auth, routing, react-router]
timestamp: 2026-07-15T00:00:00Z
resource: src/App.tsx
---

# Routes

| Route | Guard | Component |
|-------|-------|-----------|
| `/login` | Guest only | `LogInPage` |
| `/signup` | Guest only | `SignUpPage` |
| `/recover-password` | Guest only | `RecoverPasswordPage` |
| `/reset-password` | Authenticated | `ResetPasswordPage` |
| `/` | Authenticated | `HomePage` |

Guests hitting `/` redirect to `/login`. Authenticated users on auth pages redirect to `/`.

See [.agents/skills/shared/auth/route-guards.md](../../.agents/skills/shared/auth/route-guards.md).
