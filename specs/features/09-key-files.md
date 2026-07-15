---
type: Reference
title: Key files
description: Source map for auth, API, layout, and pages.
tags: [reference, files]
timestamp: 2026-07-15T00:00:00Z
---

# Key files

| Path | Role |
|------|------|
| `src/auth/AuthContext.tsx` | Supabase auth state and methods |
| `src/auth/AuthGuard.tsx` | Route protection |
| `src/api/api.ts` | Shared `apiFetch` with JWT + retry |
| `src/layout/AppHeader.tsx` | Global header + health dot |
| `src/pages/HomePage.tsx` | Authenticated landing page |
