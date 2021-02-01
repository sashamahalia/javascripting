const pets = ['cat', 'dog', 'rat']
for (i = 0; pets.length > i; i++) {
  pets[i] = pets[i] + 's'
}

console.log(pets);