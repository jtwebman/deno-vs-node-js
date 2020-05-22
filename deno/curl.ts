const res = await fetch(Deno.args[0]);
console.log(await res.text());
