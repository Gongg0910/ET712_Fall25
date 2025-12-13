import guitar_pantera_1 from   './images/guitars/guitar_pantera_Snakeskin.png'
import guitar_pantera_2 from   './images/guitars/guitar_pantera_1981_Dean_ML_Dean_from_Hell.jpg'
import guitar_pantera_3 from   './images/guitars/guitar_pantera_Turquoise.jpg'
import guitar_metallica_1 from './images/guitars/guitar_metallica_snakebyte.webp'
import guitar_metallica_2 from './images/guitars/guitar_metallica_Greeny59_les_paul.webp'
import guitar_metallica_3 from './images/guitars/guitar_metallica_JacksonKingV.webp'
import guitar_metallica_4 from './images/guitars/guitar_robert_trujillo_warwick.jpg'
import guitar_megadeth from './images/guitars/guitar_dave_mustaine_Flying_V_Custom_Black_Metallic.webp'

import album_pantera_1 from './images/albums/album_pantera_Vulgar_Display_of_Power.jpg'
import album_pantera_2 from './images/albums/album_pantera_Far_Beyond_Driven.jpg'
import album_metallica_1 from './images/albums/album_metallica_And_Justice_for_All.jpg'
import album_metallica_2 from './images/albums/album_metallica_Master_of_Puppets.jpg'
import album_metallica_3 from './images/albums/album_metallica_Ride_the_Lightning.webp'
import album_megadeth_1 from './images/albums/album_megadeth_Dystopia.png'
import album_meshuggah_1 from './images/albums/album_meshuggah_The_Violent_sleep_of_Reason.jpg'
import album_gojira_1 from './images/albums/album_gojira_From_Mars_to_Sirius.jpg'

import pick_dimebag_1 from './images/products/picks/pick_Dimebag_Dunlop_Tortex.jpg'
import pick_rex_brown_1 from './images/products/picks/pick_Rex_Brown_Dunlop_Tortex.gif'
import pick_james_hetfield_1 from './images/products/picks/pick_James_Hetfield_Black_Fang.jpg'
import pick_robert_trujillo_1 from './images/products/picks/pick_Robert_Trujillo_Dunlop_Warlord.jpg'
import pick_kirk_hammett_1 from './images/products/picks/pick_Kirk_Hammett_Dunlop_Jazz_III.jpg'
import pick_dave_mustaine_1 from './images/products/picks/pick_Dave_Mustaine_Dunlop_Tortex.jpg'
import pick_christian_andreu_1 from './images/products/picks/pick_Christian_Andreu_dunlop jazz_III_XL_nylon_red.webp'
import pick_system_of_down_1 from './images/products/picks/pick_system_of_down.jpeg'

import product_dimebag_1 from './images/products/product_dimebag_string_guitar.webp'
import product_vinnie_1 from './images/products/product_vinnie_paul_stick_drum_signature.jpg'
import product_rex_1 from './images/products/product_rex_brown_string_bass_guitar.webp'
import product_phil_1 from './images/products/product_Phil_Anselmo_mic.avif'
import product_dave_1 from './images/products/prodruc_dave_string_guitar.webp'
import product_kirk_1 from './images/products/product_kirk_string_guitar.jpg'
import product_james_1 from './images/products/product_james_string_guitar.jpg'
import product_slash_1 from './images/products/product_slash_string_guitar.jpg'

export const guitarProducts = [
    {id :1, name:"Snakeskin Guitar - Dimebag",  price:111,    was:200, image:guitar_pantera_1},
    {id :2, name:"1981 Dean ML Guitar - Dimebag", price:50,  was:90, image:guitar_pantera_2},
    {id :3, name:"Turquoise Guitar - Dimebag", price:3,    was:1, image:guitar_pantera_3},
    {id :4, name:"Snakebyte Guitar - James Hetfield", price:4,    was:1, image:guitar_metallica_1},
    {id :5, name:"Greeny '59 Les Paul Guitar - Kirk Hammett", price:4,    was:1, image:guitar_metallica_2},
    {id :6, name:"Jackson King V Guitar - James Hetfield", price:4,    was:1, image:guitar_metallica_3},
/*     {id :7, name:"Warwick bass guitar - Robert Trujillo", price:4,    was:1, image:guitar_metallica_4},
 */    {id :8, name:"Flying V Custom Black Metallic guitar - Dave Mustaine", price:4,    was:1, image:guitar_megadeth},
];

export const albumProducts = [
    {id :9, name:"Vulgar Display of Power",  price:10,    was:15, image:album_pantera_1},
    {id :10, name:"Far Beyond Driven ", price:12,  was:18, image:album_pantera_2},
    {id :11, name:"...And Justice for All", price:12,  was:18, image:album_metallica_1},
    {id :12, name:"Master of Puppets", price:12,  was:18, image:album_metallica_2},
    {id :13, name:"Ride the Lightning", price:12,  was:18, image:album_metallica_3},
    {id :14, name:"Dystopia", price:12,  was:18, image:album_megadeth_1},
    {id :15, name:"The Violent Sleep of Reason", price:12,  was:18, image:album_meshuggah_1},
    {id :16, name:"From Mars to Sirius", price:12,  was:18, image:album_gojira_1},
];

export const picksProducts = [
    {id :17, name:"Dunlop Tortex guitar green pick - Dimebag Darrell",  price:10,    was:15, image:pick_dimebag_1},
    {id :18, name:"Dunlop Tortex  guitar black pick - Rex Brown",  price:10,    was:15, image:pick_rex_brown_1},
    {id :19, name:"Black Fang guitar pick - James Hetfield",  price:10,    was:15, image:pick_james_hetfield_1},
    {id :20, name:"Dunlop Warlord bass pick - Robert Trujillo",  price:10,    was:15, image:pick_robert_trujillo_1},
    {id :21, name:"Dunlop Jazz III guitar pick - Kirk Hammett",  price:10,    was:15, image:pick_kirk_hammett_1},
    {id :22, name:"Dunlop Tortex guitar yellow pick  - Kirk Hammett",  price:10,    was:15, image:pick_dave_mustaine_1},
    {id :23, name:"Dunlop Jazz III XL Nylon 1.38mm guitar picks in red - Christian Andreu",  price:10,    was:15, image:pick_christian_andreu_1},
    {id :24, name:"Dunlop Tortex guitar black pick - System of Down",  price:10,    was:15, image:pick_system_of_down_1},
];
export const sellProducts = [
    {id :25, name:"DR Hi-Voltage electric guitar strings - Dimebag Darrell",  price:10,    was:15, image:product_dimebag_1},
    {id :26, name:"Vic Firth drumsticks - Vinnie Paul",  price:10,    was:15, image:product_vinnie_1},
    {id :27, name:"Ernie Ball Cobalt Slinky Bass Strings - Rex Brown",  price:10,    was:15, image:product_rex_1},
    {id :28, name:"Shure SM58 Microphone - Phil Anselmo",  price:10,    was:15, image:product_phil_1},
    {id :29, name:"Gibson Accessories SEG-DM10 Dave Mustaine Electric Guitar String Signature Gauge",  price:10,    was:15, image:product_dave_1},
    {id :30, name:"Ernie Ball Slinky electric guitar strings - Kirk Hammett",  price:10,    was:15, image:product_kirk_1},
    {id :31, name:"Ernie Ball Power Slinky guitar strings - James Hetfield",  price:10,    was:15, image:product_james_1},
    {id :32, name:"Paradigm Power Slinky guitar strings - Slash",  price:10,    was:15, image:product_slash_1},
    
];