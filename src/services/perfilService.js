const load = id => {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'Juca Pereira',
      nickname: 'Pereirinha',
      age: 17,
      rank: 'Fogueteiro',
      skills: [
        'Esfaquear políticos de direita',
        'Assalto a mão armada'
      ],
      score: 50,
      portifolio: [],
      localization: null
    })
  })
}

export default {
  load
}

