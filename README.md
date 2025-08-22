This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


The Branch references
When fetching from a repository, the new (remote) references are synced up automatically but the old ones aren't cleaned out from the local. The purge option fixes that. [original answer]

```bash
git fetch --prune
```
-p, --prune
Before fetching, remove any remote-tracking references that no longer exist on the remote. git fetch prune option doc on git-scm

The pull command also has the prune option (--prune or -p) see git-scm doc

git pull -p
The commits
All local branches could potentially be out of sync.

To sync up the current branch with the remote, and potentially lose local work, reset it to the remote position:
```bash
git reset --hard origin/<current_branch_name>
```
Again, caution: this would clear out the local changes (non-committed changes & non-pushed commits).

Note: This would have left 'un-synced' any other branch.

The files/changes
The not staged for commit changes
These would have been removed by the above git reset --hard