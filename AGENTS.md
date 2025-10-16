# Repository Guidelines
## Project Structure & Module Organization
- Next.js App Router lives in `app/(site)`; keep route-level logic inside `page.tsx` files while shared layouts stay in `app/layout.tsx`.
- UI primitives reside in `components/` (e.g., `components/Hero.tsx`); co-locate component-specific styles via Tailwind utility classes.
- Static configuration and copy are in `lib/site.ts` and `lib/results.ts`; update these rather than hard-coding strings.
- Static assets land in `public/`; design tokens and Tailwind setup live in `tailwind.config.ts` and `app/globals.css`.
## Build, Test, and Development Commands
- `pnpm install` – bootstrap dependencies; rerun after updating `package.json`.
- `pnpm dev` – start Next dev server on `http://localhost:3000` with hot reload.
- `pnpm build` – create optimized production bundle; runs linting checks as part of Next build pipeline.
- `pnpm start` – serve the production build locally; useful for QA parity.
- `pnpm lint` – run ESLint via `next lint`; add `--fix` when safe to auto-format.
## Coding Style & Naming Conventions
- Use TypeScript (`.ts`/`.tsx`) with strict mode; prefer 2-space indentation and avoid implicit `any`.
- Components and hooks use `PascalCase` (`AttorneyGrid.tsx`, `useThemeToggle.ts`); utility modules in `lib/` use `camelCase` exports.
- Keep Tailwind utilities mobile-first and grouped by layout → spacing → typography for readability.
- Import shared modules through the `@/` alias (`import { site } from '@/lib/site'`).
## Testing Guidelines
- No automated suite exists yet; add React Testing Library or Playwright tests alongside features to guard key flows.
- Name tests `*.test.tsx` and colocate in `__tests__/` folders near the subject module.
- Mock network boundaries; validate critical journeys such as contact form submission and navigation menus.
- Strive for >80% coverage on new code and document manual QA steps in pull requests until automation matures.
## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`) as seen in history; keep summaries under 75 characters.
- Each PR should include: concise description, screenshots for UI changes, testing notes (`pnpm build`, manual QA), and linked Linear/GitHub issue if available.
- Keep diffs focused; open follow-up PRs for refactors. Request review before merging and allow at least one approval.
## Configuration Tips
- Tailwind v4 and component variants sync through `components.json`; update tokens there before touching generated files.
- Adjust metadata or SEO artifacts in `app/(site)/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to keep contact details consistent.
