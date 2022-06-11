const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {
    'goku': {
        'name': 'Goku',
        'race': 'Saiyan',
        'gender': 'Male',
        'characterPic': 'https://static.wikia.nocookie.net/dragonball/images/5/5b/Gokusteppingoutofaspaceship.jpg/revision/latest?cb=20211011163724',
        'techniques': 'Rock Scissors n Paper, Kamehameha, Kaio-ken, Spirit Bomb, Instant Transmission, Dragon Fist, Evil Containment Wave', 
        'transformations': 'Great Ape, Unlock Potential, Agile Style, Kaio-ken, Super Saiyan, Super Kaio-ken, Super Saiyan 2, Super Saiyan 3, Super Saiyan God, Super Saiyan Blue, Super Saiyan Blue Kaio-ken, Ultra Instinct Sign, Perfected Ultra Instinct, Golden Great Ape, Super Saiyan 4'
    },
    'vegeta':{
        'name': 'Vegeta',
        'race': 'Saiyan',
        'gender': 'Male',
        'characterPic': 'https://static.wikia.nocookie.net/dragonball/images/0/0b/Vegeta_DBZ_Episode_222.png/revision/latest?cb=20220113045006',
        'techniques': 'Galick Gun, Lucora Gun, Big Bang Attack, Final Flash, Final Impact, Gamma Burst Flash, Spirit Control, Hakai, Ultra Ego, Final Shine',
        'transformations': 'Great Ape, Super Saiyan, Super Saiyan 2, Majin Vegeta, Super Saiyan God, Super Saiyan Blue, Super Saiyan God Super Saiyan Evolved, Tuffleized, Tuffleized Super Saiyan, Strongest Form 1, Strongest Form 2, Great Ape Baby, Golden Great Ape, Super Saiyan'
    },
    'gohan':{
        'name': 'Gohan',
        'race': 'Half Saiyan, Half Human',
        'gender': 'Male',
        'characterPic': 'https://static.wikia.nocookie.net/dragonball/images/d/d9/Ultimate_Gohan_full.png/revision/latest?cb=20191004025226',
        'techniques': 'Flight, Ki Blast, Ki Sense, Saiyan Power, Leave My Daddy Alone!, Hidden Potential, Mouth Energy Wave, Thrust Counterattack, Masenko, Masendan, Wild Rush Blaster, Neo Masenko, Ultimate Masenko, Double Masenko, Super Masenko, Explosive Madan, Combined Masenko, Kamehameha, Full-Power Kamehameha, Super Kamehameha, Ultimate Kamehameha, Father-Son Kamehameha, Twin Dragon Shot, Electic Kamehameha, Bros Kamehameha, Family Kamehameha, Special Beam Cannon, Golden Dome Attack, Super Assault Combo, Super Breath, Chou Maretsugeki, Quite rage, Thunder Bullet, Galactic Donut, Soaring Dragon Strike',
        'transformations': 'Great Ape, Unlock Potential, Super Saiyan, Super Saiyan Full Power, Super Saiyan 2, Potential Unleashed'
    },
    'piccolo':{
        'name': 'Piccolo',
        'race': 'Namekian',
        'gender': 'Male',
        'characterPic': 'https://static.wikia.nocookie.net/dragonball/images/c/cd/Piccolo_DBZ_Episode_148.png/revision/latest?cb=20211023180024',
        'techniques': 'Flight, Ki Blast, Ki Sense, Eternal Youth, Regeneration, Demon Hand, Healing, Explosive Demon Wave, Hyper Explosive Demon Wave, Light Grenade, Special Beam Cannon, Masenko, Scatter Shot, Hellzone Grenade, Rapid Fire, Cloning, Mouth Energy Wave, Explosive Breath Cannon, Antenna Beam, Destructive Wind, Eye Flash, Eye Laser, Thunder Shock Surprise, Evil Containment, Explosive Wave, Afterimage Technique, Magic Materialization, Telekinesis, Self Destruction, Telepathy',
        'transformations': 'Great Namekian, Super Giant-Form, Super Namekian(First Fusion), Makyan Gigantification, Super Namekian(Second Fusion), Potenial Unleashed'
    },
    'goten':{
        'name': 'Goten',
        'race': 'Half Saiyan, Half Human',
        'gender': 'Male',
        'characterPic': 'https://static.wikia.nocookie.net/dragonball/images/2/29/GotenNV.png/revision/latest?cb=20191108050056',
        'techniques': 'Flight, Ki Blast, Ki Sense, Kamehameha, Super Kamehameha, Bros. Kamehameha, Family Kamehameha, Friend Kamehameha, Assault!, Fusion Dance, High Tension Turn, Super Goten Strike, Super Explosive Wave, Rolling Thunder Punch',
        'transformations': 'Super Saiyan, Infected'
    },
    'trunks':{
        'name': 'Trunks',
        'race': 'Half Saiyan, Half Human',
        'gender': 'Male',
        'characterPic': 'https://static.wikia.nocookie.net/dragonball/images/9/93/Trunks_Dragon_Ball_Z_Episode_213.png/revision/latest?cb=20210420013441',
        'techniques': 'Flight, Ki Blast, Ki Sense, Rapid Movement, Vision Smash, Double Buster, Trick Buster, Big Tree Cannon, Energy Burst, Fusion Dance, Brave Cannon, Buster Cannon, Burning Storm, God Breaker, Explosive Wave, ',
        'transformations': 'Super Saiyan, Infected'
    },
    'future trunks':{
        'name': 'Future Trunks',
        'race': 'Half Saiyan, Half Human',
        'gender': 'Male',
        'characterPic': 'https://static.wikia.nocookie.net/dragonball/images/4/4f/Future_Trunks_DBZ_Episode_131.png/revision/latest?cb=20210608195639',
        'techniques': 'Flight, Ki Blast, Ki Sense, Saiyan Power, Healing, Mimicry, Cover Change, Saiyan Rapid Fire, Continuous Energy Bullet, Burning Attack, God Breaker, Buster Cannon, Burning Storm, Change the Future, Finish Buster, Heat Dome Attack, Solar Flare, Deadly Impact, Shining Sword Attack, Rapid Sword Stream, Burning Breaker, Blazing Rush, Maximum Blow, Another End, Aero Blast, Final Flash, Final Explosion Masenko, Evil Containment Wave ',
        'transformations': 'Super Saiyan, Super Saiyan Second Grade, Super Saiyan Third Grade, Super Saiyan 2, Super Saiyan Rage, Spirit Bomb Super Saiyan'
    },
    'unknown':{
        'race': 'unknown',
        'gender': 'unknown',
        'characterPic': 'unknown', 
        'techniques': 'unknown',
        'transformations': 'unknown',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})