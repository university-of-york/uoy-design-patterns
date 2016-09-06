module.exports = {
  options: {
    files: ['package.json', 'bower.json'],
    updateConfigs: ['package'],
    commit: true,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['package.json', 'bower.json', 'release-notes.md'],
    push: true
  }
};