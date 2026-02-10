const errada = [" joão", "MaRIA ", " PEDRO "];
const capitalizada = errada.map(item => {
  const nome = item.trim().toLowerCase();
  return nome.charAt(0).toUpperCase() + nome.slice(1);
});
console.log(capitalizada); 