# react-supabase-auth-template — Agent Skills Index

Skills in `.agents/skills/` teach agents how this repository works and how to extend it safely.

## Project status (current template)

Minimal **React + Supabase Auth** SPA paired with **cf-hono-supabase-api-template**:

- **Auth:** Google OAuth + email/password (`src/auth/`)
- **API calls:** `GET /health` (header indicator), `GET /me` (home page) via `apiFetch`
- **Routes:** `/`, `/login`, `/signup`, `/recover-password`, `/reset-password`
- **No** invoices, clients, providers, orgs, or domain tables in the default template

Canonical OKF specs: [`index.md`](../../index.md) · OKF modules: [`.agents/skills/index.md`](index.md)

## Cursor SKILL.md packs

| Skill | Use when |
|-------|----------|
| [api-architecture](api-architecture/SKILL.md) | Adding or changing worker API client modules (`src/api/`) |
| [auth-routing](auth-routing/SKILL.md) | Auth flows, guards, OAuth, protected routes |
| [page-architecture](page-architecture/SKILL.md) | New pages, layout, header, home page patterns |
| [supabase](supabase/SKILL.md) | Supabase Auth, dashboard config, MCP, CLI |
| [supabase-postgres-best-practices](supabase-postgres-best-practices/SKILL.md) | Schema design, RLS, query performance (when adding DB features) |

## OKF modules (local)

| Module | Use when |
|--------|----------|
| [api-fetch](modules/api-fetch.md) | `apiFetch` with Bearer token and 401 retry |
| [app-header-health](modules/app-header-health.md) | health polling hook and header UI |

Shared concepts (synced): [shared/auth/](shared/auth/) · [shared/supabase/](shared/supabase/)

## Project layout

```
src/
├── api/           # health.ts, me.ts, api.ts (apiFetch)
├── auth/          # AuthContext, AuthGuard, forms, pages
├── layout/        # AppLayout, AppHeader (health indicator)
├── pages/         # HomePage
├── hooks/         # use-api-health.ts
├── components/    # theme-provider, error boundaries, ui primitives
├── lib/           # supabase.ts, i18n, utils
index.md           # OKF bundle root (repo root)
specs/features/    # numbered features + log
.agents/skills/    # OKF modules + Cursor SKILL.md packs
```

## Extension order

1. **Backend first** — add route in `cf-hono-supabase-api-template`, document in its `index.md`
2. **Frontend API module** — `src/api/<feature>.ts` using `apiFetch`
3. **Page or component** — register route in `App.tsx` with `AuthGuard`
4. **Update** `specs/features/`, `.agents/skills/modules/`, and this file when patterns change
