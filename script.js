const rawStudios = [
  {
    "empresa": "Nintendo",
    "revolucao": "Considerada a salvadora da indústria de videogames após o crash de 1983...",
    "data_criacao": 1889,
    "fundadores": ["Fusajiro Yamauchi"],
    "sede": "Kyoto, Japão",
    "website": "https://www.nintendo.com",
    "cores": { "principal": "#E60012", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Super Mario Bros.", "ano": 1985 },
      { "nome": "Wii Sports", "ano": 2006 }
    ]
  },
  {
    "empresa": "Valve",
    "data_criacao": 1996,
    "sede": "Bellevue, Washington, EUA",
    "cores": { "principal": "#1b1b1b", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Half-Life", "ano": 1998 },
      { "nome": "Dota 2", "ano": 2013 }
    ]
  },
  {
    "empresa": "Epic Games",
    "data_criacao": 1991,
    "sede": "Cary, Carolina do Norte, EUA",
    "cores": { "principal": "#313131", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Fortnite", "ano": 2017 },
      { "nome": "Unreal Engine", "ano": 1998 }
    ]
  },
  {
    "empresa": "Riot Games",
    "data_criacao": 2006,
    "sede": "Los Angeles, Califórnia, EUA",
    "cores": { "principal": "#D02F3C", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "League of Legends", "ano": 2009 },
      { "nome": "Valorant", "ano": 2020 }
    ]
  },
  {
    "empresa": "Electronic Arts (EA)",
    "data_criacao": 1982,
    "sede": "Redwood City, Califórnia, EUA",
    "cores": { "principal": "#161616", "texto": "#F0F0F0" },
    "jogos": [
      { "nome": "FIFA Ultimate Team", "ano": 2009 },
      { "nome": "Apex Legends", "ano": 2019 }
    ]
  },
  {
    "empresa": "miHoYo",
    "data_criacao": 2012,
    "sede": "Xangai, China",
    "cores": { "principal": "#00B2E4", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Genshin Impact", "ano": 2020 },
      { "nome": "Honkai: Star Rail", "ano": 2023 }
    ]
  },
  {
    "empresa": "Sony Interactive Entertainment",
    "data_criacao": 1993,
    "sede": "San Mateo, Califórnia, EUA",
    "cores": { "principal": "#003087", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Final Fantasy VII", "ano": 1997 },
      { "nome": "Metal Gear Solid", "ano": 1998 }
    ]
  },
  {
    "empresa": "Microsoft (Xbox Game Studios)",
    "data_criacao": 2000,
    "sede": "Redmond, Washington, EUA",
    "cores": { "principal": "#107C10", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Halo 2", "ano": 2004 },
      { "nome": "Forza Motorsport", "ano": 2005 }
    ]
  },
  {
    "empresa": "id Software",
    "data_criacao": 1991,
    "sede": "Richardson, Texas, EUA",
    "cores": { "principal": "#F2A900", "texto": "#000000" },
    "jogos": [
      { "nome": "Doom", "ano": 1993 },
      { "nome": "Quake", "ano": 1996 }
    ]
  },
  {
    "empresa": "Blizzard Entertainment",
    "data_criacao": 1991,
    "sede": "Irvine, Califórnia, EUA",
    "cores": { "principal": "#0066CC", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "World of Warcraft", "ano": 2004 },
      { "nome": "Hearthstone", "ano": 2014 }
    ]
  },
  {
    "empresa": "Rockstar Games North",
    "data_criacao": 1987,
    "sede": "Edimburgo, Escócia",
    "cores": { "principal": "#FBB117", "texto": "#000000" },
    "jogos": [
      { "nome": "Grand Theft Auto III", "ano": 2001 },
      { "nome": "Red Dead Redemption 2", "ano": 2018 }
    ]
  },
  {
    "empresa": "Mojang Studios",
    "data_criacao": 2009,
    "sede": "Estocolmo, Suécia",
    "cores": { "principal": "#5A8351", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Minecraft", "ano": 2011 }
    ]
  },
  {
    "empresa": "King",
    "data_criacao": 2003,
    "sede": "Estocolmo, Suécia",
    "cores": { "principal": "#FFC107", "texto": "#000000" },
    "jogos": [
      { "nome": "Candy Crush Saga", "ano": 2012 }
    ]
  },
  {
    "empresa": "Activision",
    "data_criacao": 1979,
    "sede": "Santa Monica, Califórnia, EUA",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Call of Duty 4: Modern Warfare", "ano": 2007 },
      { "nome": "Tony Hawk's Pro Skater 2", "ano": 2000 }
    ]
  },
  {
    "empresa": "Ubisoft",
    "data_criacao": 1986,
    "sede": "Montreuil, França",
    "cores": { "principal": "#0078F2", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Assassin's Creed II", "ano": 2009 },
      { "nome": "Far Cry 3", "ano": 2012 }
    ]
  },
  {
    "empresa": "Capcom",
    "data_criacao": 1979,
    "sede": "Osaka, Japão",
    "cores": { "principal": "#FFC400", "texto": "#000000" },
    "jogos": [
      { "nome": "Street Fighter II", "ano": 1991 },
      { "nome": "Resident Evil 4", "ano": 2005 }
    ]
  },
  {
    "empresa": "Sega",
    "data_criacao": 1960,
    "sede": "Tóquio, Japão",
    "cores": { "principal": "#00387B", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Sonic the Hedgehog", "ano": 1991 },
      { "nome": "Yakuza 0", "ano": 2015 }
    ]
  },
  {
    "empresa": "Square Enix",
    "data_criacao": 2003,
    "sede": "Tóquio, Japão",
    "cores": { "principal": "#ED1C24", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Chrono Trigger", "ano": 1995 },
      { "nome": "Kingdom Hearts II", "ano": 2005 }
    ]
  },
  {
    "empresa": "FromSoftware",
    "data_criacao": 1986,
    "sede": "Tóquio, Japão",
    "cores": { "principal": "#3A3A3A", "texto": "#BFA15A" },
    "jogos": [
      { "nome": "Dark Souls", "ano": 2011 },
      { "nome": "Elden Ring", "ano": 2022 }
    ]
  },
  {
    "empresa": "CD Projekt Red",
    "data_criacao": 1994,
    "sede": "Varsóvia, Polônia",
    "cores": { "principal": "#DC042B", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "The Witcher 3: Wild Hunt", "ano": 2015 },
      { "nome": "Cyberpunk 2077", "ano": 2020 }
    ]
  },
  {
    "empresa": "Larian Studios",
    "data_criacao": 1996,
    "sede": "Gante, Bélgica",
    "cores": { "principal": "#A92317", "texto": "#F2E1A4" },
    "jogos": [
      { "nome": "Divinity: Original Sin 2", "ano": 2017 },
      { "nome": "Baldur's Gate 3", "ano": 2023 }
    ]
  },
  {
    "empresa": "Supergiant Games",
    "data_criacao": 2009,
    "sede": "San Francisco, Califórnia, EUA",
    "cores": { "principal": "#E43A19", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Bastion", "ano": 2011 },
      { "nome": "Hades", "ano": 2020 }
    ]
  },
  {
    "empresa": "Naughty Dog",
    "data_criacao": 1984,
    "sede": "Santa Monica, Califórnia, EUA",
    "cores": { "principal": "#A51C1B", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "The Last of Us", "ano": 2013 },
      { "nome": "Uncharted 2: Among Thieves", "ano": 2009 }
    ]
  },
  {
    "empresa": "Team Cherry",
    "data_criacao": 2012,
    "sede": "Adelaide, Austrália",
    "cores": { "principal": "#EAEAEA", "texto": "#1A1A1A" },
    "jogos": [
      { "nome": "Hollow Knight", "ano": 2017 },
      { "nome": "Hollow Knight: Silksong", "ano": 2025 }
    ]
  },
  {
    "empresa": "ConcernedApe",
    "data_criacao": 2012,
    "sede": "Seattle, Washington, EUA",
    "cores": { "principal": "#FFAF44", "texto": "#6A3600" },
    "jogos": [
      { "nome": "Stardew Valley", "ano": 2016 }
    ]
  },
  {
    "empresa": "Studio MDHR",
    "data_criacao": 2013,
    "sede": "Oakville, Ontário, Canadá",
    "cores": { "principal": "#F9D382", "texto": "#D22B23" },
    "jogos": [
      { "nome": "Cuphead", "ano": 2017 }
    ]
  },
  {
    "empresa": "Sandfall Interactive",
    "data_criacao": 2020,
    "sede": "Montpellier, França",
    "cores": { "principal": "#1C2C3A", "texto": "#E1DBC8" },
    "jogos": [
      { "nome": "Expedition 33", "ano": 2025 }
    ]
  },
  {
    "empresa": "Konami",
    "data_criacao": 1969,
    "sede": "Tóquio, Japão",
    "cores": { "principal": "#D71920", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Metal Gear Solid", "ano": 1998 },
      { "nome": "Silent Hill 2", "ano": 2001 }
    ]
  },
  {
    "empresa": "Bandai Namco Entertainment",
    "data_criacao": 2006,
    "sede": "Tóquio, Japão",
    "cores": { "principal": "#E30413", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Pac-Man", "ano": 1980 },
      { "nome": "Tekken 7", "ano": 2015 }
    ]
  },
  {
    "empresa": "Atari",
    "data_criacao": 1972,
    "sede": "Nova Iorque, Nova Iorque, EUA",
    "cores": { "principal": "#CF0A2C", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Pong", "ano": 1972 },
      { "nome": "Asteroids", "ano": 1979 }
    ]
  },
  {
    "empresa": "Unity Technologies",
    "data_criacao": 2004,
    "sede": "São Francisco, Califórnia, EUA",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Ori and the Blind Forest", "ano": 2015 },
      { "nome": "Cuphead", "ano": 2017 },
      { "nome": "Genshin Impact", "ano": 2020 }
    ]
  },
  {
    "empresa": "Roblox Corporation",
    "data_criacao": 2004,
    "sede": "San Mateo, Califórnia, EUA",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Adopt Me!", "ano": 2017 },
      { "nome": "Tower of Hell", "ano": 2018 }
    ]
  },
  {
    "empresa": "Telltale Games",
    "data_criacao": 2004,
    "sede": "San Rafael, Califórnia, EUA",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "The Walking Dead: Season One", "ano": 2012 },
      { "nome": "The Wolf Among Us", "ano": 2013 }
    ]
  },
  {
    "empresa": "Paradox Interactive",
    "data_criacao": 1999,
    "sede": "Estocolmo, Suécia",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Crusader Kings II", "ano": 2012 },
      { "nome": "Europa Universalis IV", "ano": 2013 }
    ]
  },
  {
    "empresa": "Remedy Entertainment",
    "data_criacao": 1995,
    "sede": "Espoo, Finlândia",
    "cores": { "principal": "#FFFFFF", "texto": "#000000" },
    "jogos": [
      { "nome": "Max Payne", "ano": 2001 },
      { "nome": "Control", "ano": 2019 }
    ]
  },
  {
    "empresa": "Kojima Productions",
    "data_criacao": 2015,
    "sede": "Tóquio, Japão",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Death Stranding", "ano": 2019 }
    ]
  },
  {
    "empresa": "Insomniac Games",
    "data_criacao": 1994,
    "sede": "Burbank, Califórnia, EUA",
    "cores": { "principal": "#0078F2", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Ratchet & Clank", "ano": 2004 },
      { "nome": "Marvel's Spider-Man", "ano": 2018 }
    ]
  },
  {
    "empresa": "Supercell",
    "data_criacao": 2010,
    "sede": "Helsinque, Finlândia",
    "cores": { "principal": "#FFA500", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Clash of Clans", "ano": 2012 },
      { "nome": "Clash Royale", "ano": 2016 }
    ]
  },
  {
    "empresa": "Media Molecule",
    "data_criacao": 2006,
    "sede": "Guildford, Reino Unido",
    "cores": { "principal": "#800080", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "LittleBigPlanet", "ano": 2008 },
      { "nome": "Dreams", "ano": 2020 }
    ]
  },
  {
    "empresa": "Crytek",
    "data_criacao": 1999,
    "sede": "Frankfurt, Alemanha",
    "cores": { "principal": "#808080", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Crysis", "ano": 2007 },
      { "nome": "Hunt: Showdown", "ano": 2018 }
    ]
  },
  {
    "empresa": "Harmonix",
    "data_criacao": 1995,
    "sede": "Cambridge, Massachusetts, EUA",
    "cores": { "principal": "#FFA500", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Guitar Hero", "ano": 2005 },
      { "nome": "Rock Band", "ano": 2007 }
    ]
  },
  {
    "empresa": "BioWare",
    "data_criacao": 1995,
    "sede": "Edmonton, Alberta, Canadá",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Mass Effect", "ano": 2007 },
      { "nome": "Dragon Age: Origins", "ano": 2009 }
    ]
  },
  {
    "empresa": "Digital Extremes",
    "data_criacao": 1993,
    "sede": "London, Ontario, Canadá",
    "cores": { "principal": "#C0C0C0", "texto": "#000000" },
    "jogos": [
      { "nome": "Warframe", "ano": 2013 }
    ]
  },
  {
    "empresa": "Asobo Studio",
    "data_criacao": 2002,
    "sede": "Bordeaux, França",
    "cores": { "principal": "#0078F2", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "A Plague Tale: Innocence", "ano": 2019 }
    ]
  },
  {
    "empresa": "Piranha Bytes",
    "data_criacao": 1997,
    "sede": "Essen, Alemanha",
    "cores": { "principal": "#A52A2A", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Gothic", "ano": 2001 },
      { "nome": "ELEX", "ano": 2017 }
    ]
  },
  {
    "empresa": "PopCap Games",
    "data_criacao": 2000,
    "sede": "Seattle, Washington, EUA",
    "cores": { "principal": "#FFA500", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Bejeweled", "ano": 2001 },
      { "nome": "Plants vs. Zombies", "ano": 2009 }
    ]
  },
  {
    "empresa": "NetEase Games",
    "data_criacao": 2001,
    "sede": "Guangzhou, China",
    "cores": { "principal": "#FF0000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Identity V", "ano": 2018 }
    ]
  },
  {
    "empresa": "Infinity Ward",
    "data_criacao": 2002,
    "sede": "Los Angeles, Califórnia, EUA",
    "cores": { "principal": "#008000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Call of Duty", "ano": 2003 }
    ]
  },
  {
    "empresa": "Behaviour Interactive",
    "data_criacao": 1992,
    "sede": "Montreal, Quebec, Canadá",
    "cores": { "principal": "#FFA500", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Dead by Daylight", "ano": 2016 }
    ]
  },
  {
    "empresa": "Frontier Developments",
    "data_criacao": 1994,
    "sede": "Cambridge, Reino Unido",
    "cores": { "principal": "#0078F2", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Elite Dangerous", "ano": 2014 },
      { "nome": "Planet Coaster", "ano": 2016 }
    ]
  },
  {
    "empresa": "Bungie",
    "data_criacao": 1991,
    "sede": "Bellevue, Washington, EUA",
    "cores": { "principal": "#0078F2", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Halo: Combat Evolved", "ano": 2001 }
    ]
  },
  {
    "empresa": "Firaxis Games",
    "data_criacao": 1996,
    "sede": "Sparks, Maryland, EUA",
    "cores": { "principal": "#0078F2", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "XCOM: Enemy Unknown", "ano": 2012 }
    ]
  },
  {
    "empresa": "Arkane Studios",
    "data_criacao": 1999,
    "sede": "Lyon, França",
    "cores": { "principal": "#000000", "texto": "#FFD700" },
    "jogos": [
      { "nome": "Dishonored", "ano": 2012 }
    ]
  },
  {
    "empresa": "Sucker Punch Productions",
    "data_criacao": 1997,
    "sede": "Bellevue, Washington, EUA",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Ghost of Tsushima", "ano": 2020 }
    ]
  },
  {
    "empresa": "Obsidian Entertainment",
    "data_criacao": 2003,
    "sede": "Irvine, Califórnia, EUA",
    "cores": { "principal": "#000000", "texto": "#808080" },
    "jogos": [
      { "nome": "Fallout: New Vegas", "ano": 2010 }
    ]
  },
  {
    "empresa": "Playdead",
    "data_criacao": 2006,
    "sede": "Copenhague, Dinamarca",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Limbo", "ano": 2010 }
    ]
  },
  {
    "empresa": "2K Games",
    "data_criacao": 2005,
    "sede": "Novato, Califórnia, EUA",
    "cores": { "principal": "#C20000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "BioShock", "ano": 2007 },
      { "nome": "Borderlands 2", "ano": 2012 }
    ]
  },
  {
    "empresa": "Devolver Digital",
    "data_criacao": 2009,
    "sede": "Austin, Texas, EUA",
    "cores": { "principal": "#E53333", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Hotline Miami", "ano": 2012 }
    ]
  },
  {
    "empresa": "Gearbox Software",
    "data_criacao": 1999,
    "sede": "Frisco, Texas, EUA",
    "cores": { "principal": "#F29100", "texto": "#000000" },
    "jogos": [
      { "nome": "Borderlands", "ano": 2009 }
    ]
  },
  {
    "empresa": "Tencent Games",
    "data_criacao": 2003,
    "sede": "Shenzhen, China",
    "cores": { "principal": "#0078F2", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "PUBG Mobile", "ano": 2018 }
    ]
  },
  {
    "empresa": "Bethesda Game Studios",
    "data_criacao": 2001,
    "sede": "Rockville, Maryland, EUA",
    "cores": { "principal": "#3A3A3A", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "The Elder Scrolls V: Skyrim", "ano": 2011 }
    ]
  },
  {
    "empresa": "Take-Two Interactive",
    "data_criacao": 1993,
    "sede": "Nova Iorque, Nova Iorque, EUA",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Grand Theft Auto V", "ano": 2013 }
    ]
  },
  {
    "empresa": "Atlus",
    "data_criacao": 1986,
    "sede": "Tóquio, Japão",
    "cores": { "principal": "#E4002B", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Persona 5 Royal", "ano": 2019 }
    ]
  },
  {
    "empresa": "Creative Assembly",
    "data_criacao": 1987,
    "sede": "Horsham, Inglaterra",
    "cores": { "principal": "#B22222", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Total War: Warhammer II", "ano": 2017 }
    ]
  },
  {
    "empresa": "Moon Studios",
    "data_criacao": 2010,
    "sede": "Viena, Áustria",
    "cores": { "principal": "#4682B4", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Ori and the Blind Forest", "ano": 2015 }
    ]
  },
  {
    "empresa": "Psyonix",
    "data_criacao": 2000,
    "sede": "San Diego, Califórnia, EUA",
    "cores": { "principal": "#0077C8", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Rocket League", "ano": 2015 }
    ]
  },
  {
    "empresa": "Hello Games",
    "data_criacao": 2008,
    "sede": "Guildford, Inglaterra",
    "cores": { "principal": "#F37321", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "No Man's Sky", "ano": 2016 }
    ]
  },
  {
    "empresa": "Double Fine Productions",
    "data_criacao": 2000,
    "sede": "San Francisco, Califórnia, EUA",
    "cores": { "principal": "#7D6B5C", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "Psychonauts 2", "ano": 2021 }
    ]
  },
  {
    "empresa": "Codemasters",
    "data_criacao": 1986,
    "sede": "Southam, Inglaterra",
    "cores": { "principal": "#000000", "texto": "#FFFFFF" },
    "jogos": [
      { "nome": "DiRT Rally 2.0", "ano": 2019 }
    ]
  },
  {
    "empresa": "LucasArts",
    "data_criacao": 1982,
    "sede": "San Francisco, Califórnia, EUA",
    "cores": { "principal": "#FFC90E", "texto": "#000000" },
    "jogos": [
      { "nome": "The Secret of Monkey Island", "ano": 1990 }
    ]
  },
  {
    "empresa": "Guerilla Games",
    "data_criacao": 2000,
    "sede": "Amsterdã, Holanda",
    "cores": { "principal": "#FFFFFF", "texto": "#000000" },
    "jogos": [
      { "nome": "Horizon Zero Dawn", "ano": 2017 }
    ]
  }
];

const studios = rawStudios.map(s => {
  let e = '10s';
  if(s.data_criacao < 1980) e = 'pre80';
  else if(s.data_criacao < 1990) e = '80s';
  else if(s.data_criacao < 2000) e = '90s';
  else if(s.data_criacao < 2010) e = '00s';

  let origin = s.sede;
  if(origin.includes('Japão')) origin = '🇯🇵 ' + origin;
  else if(origin.includes('EUA')) origin = '🇺🇸 ' + origin;
  else if(origin.includes('França')) origin = '🇫🇷 ' + origin;
  else if(origin.includes('Polônia')) origin = '🇵🇱 ' + origin;
  else if(origin.includes('UK') || origin.includes('Inglaterra') || origin.includes('Reino Unido') || origin.includes('Escócia')) origin = '🇬🇧 ' + origin;
  else if(origin.includes('Canadá')) origin = '🇨🇦 ' + origin;
  else if(origin.includes('Suécia')) origin = '🇸🇪 ' + origin;
  else if(origin.includes('Finlândia')) origin = '🇫🇮 ' + origin;
  else if(origin.includes('Alemanha')) origin = '🇩🇪 ' + origin;
  else if(origin.includes('Bélgica')) origin = '🇧🇪 ' + origin;
  else if(origin.includes('China')) origin = '🇨🇳 ' + origin;
  else if(origin.includes('Holanda')) origin = '🇳🇱 ' + origin;
  else if(origin.includes('Austrália')) origin = '🇦🇺 ' + origin;

  return {
    name: s.empresa,
    origin: origin,
    founded: s.data_criacao,
    era: e,
    color: s.cores.principal,
    games: s.jogos.map(g => g.nome).join(', ')
  };
});

document.getElementById('contagem').textContent = studios.length;

const featured = [
  studios.find(s=>s.name==='Nintendo'),
  studios.find(s=>s.name==='Blizzard Entertainment'),
  studios.find(s=>s.name==='Rockstar Games North'),
  studios.find(s=>s.name==='FromSoftware'),
  studios.find(s=>s.name==='Valve'),
  studios.find(s=>s.name==='CD Projekt Red'),
  studios.find(s=>s.name==='id Software'),
  studios.find(s=>s.name==='Capcom'),
].filter(Boolean);

const fl = document.getElementById('lista-destaque');
featured.forEach((s, i) => {
  const el = document.createElement('div');
  el.className = 'item-destaque';
  el.innerHTML = `
    <span class="numero-destaque">0${i+1}</span>
    <span class="bolinha" style="background:${s.color}"></span>
    <span class="nome-destaque">${s.name}</span>
    <span class="ano-destaque">${s.founded}</span>
    <span class="seta">→</span>
  `;
  el.addEventListener('click', () => {
    document.getElementById('dados').scrollIntoView({behavior:'smooth'});
  });
  fl.appendChild(el);
});

let sort = 'founded', era = 'all', search = '';

const icons = {
  pc: '<svg class="platform-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>',
  ps: '<svg class="platform-icon" viewBox="0 0 24 24"><path d="M22,11.2V14h-2.2c-0.6,0-1.1,0.5-1.1,1.1v2.2h-2.8v-2.2c0-1.2-1-2.2-2.2-2.2h-2.2V11.2h2.2c0.6,0,1.1-0.5,1.1-1.1 V7.8h2.8v2.2C17.6,10,18.6,11,19.8,11H22z M7.8,7.8L7.8,7.8v2.2H5.6c-0.6,0-1.1,0.5-1.1,1.1v2.2H1.7v-2.2C1.7,10,2.7,9,3.9,9h2.2 V6.8C6.1,6.8,7.8,7.8,7.8,7.8z"/></svg>',
  xbox: '<svg class="platform-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.16 5.86l2.97 3.51 2.37-3.51c.42-.63 1.39-.77 1.88-.13.38.49.27 1.25-.26 1.7l-2.65 2.3 2.75 2.87c.43.45.47 1.16.08 1.6-.36.41-1.07.47-1.54.04L13.5 13.3l-2.85 2.94c-.47.48-1.18.42-1.54-.04-.39-.44-.35-1.15.08-1.6l2.75-2.87-2.65-2.3c-.53-.45-.64-1.21-.26-1.7.49-.64 1.46-.5 1.88.13z"/></svg>',
  nintendo: '<svg class="platform-icon" viewBox="0 0 24 24"><path d="M21 11H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM6 17.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm14.5 0h-6v-3h6v3z"/></svg>',
  mobile: '<svg class="platform-icon" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>'
};

const eraMap = {pre80:'Pre-80','80s':'80s','90s':'90s','00s':'00s','10s':'10s+'};

function initials(n) {
  return n.replace(/[^A-Za-z ]/g,'').split(' ').map(w=>w[0]||'').join('').slice(0,2).toUpperCase();
}

function eraColor(e) {
  return {pre80:'#78716c','80s':'#374151','90s':'#1e3a5f','00s':'#14532d','10s':'#3b0764'}[e] || '#444';
}

function getRatingColor(score) {
  if (score >= 4.5) return '#6dc849';
  if (score >= 3.5) return '#fdca52';
  if (score >= 2.5) return '#f79a24';
  return '#fc4b37';
}

function render(list) {
  const c = document.getElementById('cartoes');
  c.innerHTML = '';
  if (!list.length) {
    c.innerHTML = '<div id="carregando">Nenhum estúdio encontrado.</div>';
    return;
  }
  list.forEach((s, i) => {
    const addedCount = Math.floor(Math.random() * 8000) + 500;
    const rating = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
    const ratingColor = getRatingColor(rating);
    const imageUrl = `https://placehold.co/600x340/${s.color.replace('#','')}/ffffff?text=${encodeURIComponent(s.name)}`;
    
    let plats = ['pc', 'ps', 'xbox'];
    if (s.name === 'Nintendo') plats = ['nintendo'];
    else if (s.name === 'Supercell') plats = ['mobile'];
    else if (['Naughty Dog', 'Insomniac Games'].includes(s.name)) plats = ['ps'];
    else if (s.name === 'Valve') plats = ['pc'];
    else if (s.name === 'Riot Games') plats = ['pc', 'mobile'];
    else if (s.name === 'Mojang') plats = ['pc', 'ps', 'xbox', 'nintendo', 'mobile'];
    else if (['Sega','Capcom','Namco','Konami','Square Enix','Ubisoft','EA Games','Activision','Blizzard','Taito','Atari','Hello Games'].includes(s.name)) plats = ['pc', 'ps', 'xbox', 'nintendo'];

    const el = document.createElement('div');
    const idx = String(i + 1).padStart(2, '0');
    el.className = 'cartao-rawg';
    el.style.animationDelay = (i * 50) + 'ms';
    
    el.innerHTML = `
      <div class="card-media">
        <img src="${imageUrl}" alt="${s.name}" loading="lazy">
      </div>
      <div class="card-info">
        <div class="card-header">
          <div class="platforms">
            ${plats.map(p => icons[p]).join('')}
          </div>
          <div class="rating-badge" style="color:${ratingColor};border-color:${ratingColor}">
            ${rating}
          </div>
        </div>
        <div class="card-title">${s.name}</div>
        <div class="card-footer">
          <div class="btn-add">+ ${addedCount.toLocaleString()}</div>
          <div class="meta-info">
             <span>${eraMap[s.era] || s.era}</span> • 
             <span>${s.origin.split(' ')[1] || s.origin}</span>
          </div>
        </div>
        <div class="games-list" style="display:none; margin-top:12px; padding-top:12px; border-top:1px solid #333; color:#aaa; font-size:0.9rem; line-height:1.4;">
          <strong style="color:#fff;">Jogos Famosos:</strong><br>${s.games}
        </div>
      </div>
    `;
    
    el.addEventListener('click', () => {
      const g = el.querySelector('.games-list');
      if (g) g.style.display = g.style.display === 'none' ? 'block' : 'none';
    });

    c.appendChild(el);
  });
}

const style = document.createElement('style');
style.textContent = `
  #cartoes {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
    gap: 24px !important;
    padding: 20px 0;
  }
  .cartao-rawg {
    background-color: #202020;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }
  .cartao-rawg:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    z-index: 2;
  }
  .card-media {
    height: 180px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .card-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-info {
    padding: 16px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }
  .platforms {
    display: flex;
    gap: 6px;
  }
  .platform-icon {
    width: 16px;
    height: 16px;
    fill: #fff;
    opacity: 0.8;
  }
  .rating-badge {
    font-weight: bold;
    border: 1px solid;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.85rem;
  }
  .card-title {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 8px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }
  .btn-add {
    background: #333;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.8rem;
    color: #ccc;
  }
  .meta-info {
    font-size: 0.8rem;
    color: #777;
  }
  @keyframes fadeIn { to { opacity: 1; } }
`;
document.head.appendChild(style);

function go() {
  let list = [...studios];
  if (era !== 'all') list = list.filter(s => s.era === era);
  if (search) list = list.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
  if (sort === 'az') list.sort((a,b) => a.name.localeCompare(b.name));
  else list.sort((a,b) => a.founded - b.founded);
  render(list);
}

setTimeout(() => {
  const l = document.getElementById('carregando');
  if (l) l.remove();
  go();
}, 1500);

document.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('[data-sort]').forEach(x => x.classList.remove('on'));
  b.classList.add('on'); sort = b.dataset.sort; go();
}));
document.querySelectorAll('[data-era]').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('[data-era]').forEach(x => x.classList.remove('on'));
  b.classList.add('on'); era = b.dataset.era; go();
}));

document.getElementById('busca').addEventListener('input', (e) => {
  search = e.target.value;
  go();
});
