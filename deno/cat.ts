Deno.args.forEach(async (filename) => {
  const file = await Deno.open(filename, { read: true, write: false });
  await Deno.copy(file, Deno.stdout);
  file.close();
});
