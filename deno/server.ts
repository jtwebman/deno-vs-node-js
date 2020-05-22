import { serve } from 'https://deno.land/std@0.53.0/http/server.ts';

const port = 8000;

const server = serve({ port });

console.log(`Server running at http://localhost:${port}/`);

for await (const req of server) {
  req.respond({ body: 'Hello World' });
}
