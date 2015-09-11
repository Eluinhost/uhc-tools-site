var projects = [
  {
    name: 'Forge UltraHardcore',
    description: 'Simple forge serverside only mod for UHC, under development',
    source: 'https://github.com/Eluinhost/ForgeUltraHardcore',
    type: 'Forge mod',
    compat: '1.8.8'
  },
  {
    name: 'Unendurable Healing',
    version: '1.0.0',
    description: 'Causes all items a player has to take damage as the player heals',
    source: 'https://github.com/Eluinhost/unendurable-healing',
    downloads: 'https://github.com/Eluinhost/unendurable-healing/releases',
    type: 'Bukkit Plugin',
    compat: 'Any?'
  },
  {
    name: 'UberHardcore (?)',
    description: 'Replaces base mobs with something a touch harder, under development',
    source: 'https://github.com/Eluinhost/UberHardcore',
    type: 'Forge mod',
    compat: '1.8.8'
  },
  {
    name: 'Match Calendar',
    version: '0.2',
    description: 'Calendar for showing upcoming games for UHC',
    source: 'https://github.com/Eluinhost/Match-Calendar',
    downloads: 'http://c.uhc.gg',
    downloadString: 'Visit Site',
    type: 'Website'
  },
  {
    name: 'UHC Teamspeak Authentication',
    version: '2.0.0',
    description: 'Website to setup verified accounts on the UHC teamspeak (uhc.gg)',
    source: 'https://github.com/Eluinhost/TeamspeakAuth',
    downloads: 'http://auth.publicuhc.com',
    downloadString: 'Visit Site',
    type: 'Website'
  },
  {
    name: 'Hidden Health',
    version: '1.1',
    description: 'Hides a players health and/or food level from them',
    source: 'https://github.com/UltraSoftcore/hiddenhealth',
    downloads: 'https://github.com/UltraSoftcore/hiddenhealth/releases',
    type: 'Plugin',
    compat: '1.7.9+'
  },
  {
    name: 'ChunkBiomes',
    version: '1.0.0',
    description: 'Create maps with per-chunk gridded biomes with walls',
    source: 'https://github.com/Eluinhost/ChunkBiomes',
    downloads: 'https://github.com/Eluinhost/ChunkBiomes/releases',
    type: 'Plugin',
    compat: '1.8.8'
  },
  {
    name: 'Migration',
    version: '1.0.0',
    description: 'Plugin to make people move between areas or suffer damage',
    source: 'https://github.com/Eluinhost/migration',
    downloads: 'https://github.com/Eluinhost/migration/releases',
    type: 'Plugin',
    compat: '1.8.8'
  }
];

projects = _.sortBy(projects, function(project) {
  return project.name.toLowerCase();
});