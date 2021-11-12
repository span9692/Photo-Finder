'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Photos', [
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636692234/AllPhoto%20PhotoFinder/wedding%20photos/wedding1_b20x1b.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693119/AllPhoto%20PhotoFinder/wedding%20photos/main-1-2_mcbdpc.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693120/AllPhoto%20PhotoFinder/wedding%20photos/Bride-and-Groom-Hutton-House-Wedding-Minneapolis-MN_qmgyeb.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693120/AllPhoto%20PhotoFinder/wedding%20photos/maxresdefault_kcycat.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693120/AllPhoto%20PhotoFinder/wedding%20photos/01-the-grand-long-beach-wedding-photos-natalie-luca_o1rvja.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693119/AllPhoto%20PhotoFinder/wedding%20photos/44245513_10155923876911984_870515993166741504_n_ipwac3.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693120/AllPhoto%20PhotoFinder/wedding%20photos/home-page-01_mi2q84.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693121/AllPhoto%20PhotoFinder/wedding%20photos/JRRF-38-scaled_boj2e3.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693161/AllPhoto%20PhotoFinder/wedding%20photos/1483735796-1483552460-wedding-photos-30_obvlyi.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693161/AllPhoto%20PhotoFinder/wedding%20photos/summit-ceremony_ieksdv.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/116721238_358568658848636_5794182184694953531_n_tx1uxv.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/171382822_534485091256991_7558158554090076566_n_uhrayl.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/175729797_539910720714428_2618599961936166228_n_x6wylm.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/201489991_604674910904675_8821650200149593550_n_uaqn5o.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/240169065_618867639485402_3708939981894847974_n_jemkvc.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/227493642_604674904238009_6062212756178539087_n_c26079.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/239908918_618867596152073_329545731063019395_n_d3cuxh.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/69443900_119562126082625_1262901791557681152_n_qh7mti.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/69452924_119560969416074_7525971382035808256_n_vkaffn.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/116876783_358568525515316_3254030643313730669_n_w4zi2w.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 3, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752298/AllPhoto%20PhotoFinder/maternal%20photos/Maternity-Portriat--scaled_j6yp9r.jpg', type: 'maternal', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 3, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752298/AllPhoto%20PhotoFinder/maternal%20photos/iStock-1274057098_qpdf8u.jpg', type: 'maternal', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 3, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752298/AllPhoto%20PhotoFinder/maternal%20photos/maternity_photoshoot_jzwdhg.jpg', type: 'maternal', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 3, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752297/AllPhoto%20PhotoFinder/maternal%20photos/Ramina-Magid-Maternity-Photographer-Los-Angeles-00021_tlg9gu.jpg', type: 'maternal', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 3, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752297/AllPhoto%20PhotoFinder/maternal%20photos/ED1_9767_ceypof.jpg', type: 'maternal', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 4, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752861/AllPhoto%20PhotoFinder/adventure%20photos/2019-12-18-sn-summer-2019-photoshoot-4569-jpg_edarp2.jpg', type: 'adventure', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 4, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752861/AllPhoto%20PhotoFinder/adventure%20photos/jody-macdonald-adventure-photography-tips-in-article_ihe82y.jpg', type: 'adventure', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 4, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752860/AllPhoto%20PhotoFinder/adventure%20photos/images_n2dgui.jpg', type: 'adventure', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 4, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752861/AllPhoto%20PhotoFinder/adventure%20photos/High_Desert_Couples_Session_in_Albuquerque_New_Mexico___Between_the_Pine_Adventure_Elopement_and_Wedding_Photography_cwqfvx.jpg', type: 'adventure', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 4, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752861/AllPhoto%20PhotoFinder/adventure%20photos/image_wueeqo.jpg', type: 'adventure', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 4, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636752861/AllPhoto%20PhotoFinder/adventure%20photos/4-Breckenridge-Backcountry-Engagement-shoot-James-Moro_rzcjyj.jpg', type: 'adventure', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 5, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753373/AllPhoto%20PhotoFinder/family%20photos/Vancouver-family-photographer_la9guy.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 5, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753373/AllPhoto%20PhotoFinder/family%20photos/young-boy-and-girl-touch-fathers-beard_v5mukv.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 5, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/pjimage-2-1585013198_ketndj.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 6, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/photo-1588979355313-6711a095465f_yxekvt.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 6, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/P030_1218_005_E_ryux1v.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 6, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/family-of-six-portrait-boulder-colorado-photographer-scaled_lwskfh.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 7, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/family-portrait-ideas-generations_rkbq8f.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 7, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/Hero-JennC-FamilyPortraits-1400x960_octllf.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 7, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/image_jugnpq.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 8, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/images_arbxon.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 8, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753371/AllPhoto%20PhotoFinder/family%20photos/images_1_phnndc.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 8, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753370/AllPhoto%20PhotoFinder/family%20photos/193A8889Slideshow-1280x640_cvz1fv.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 9, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753371/AllPhoto%20PhotoFinder/family%20photos/4a62aca17185ec3cbd4d666487ed5c27_y0d1b7.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 9, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753371/AllPhoto%20PhotoFinder/family%20photos/Ewers_005_zqxuen.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 9, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753370/AllPhoto%20PhotoFinder/family%20photos/family_photographs_aberdeen_qlpmzn.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 10, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753372/AllPhoto%20PhotoFinder/family%20photos/QT-Family-Values_ubovzz.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 10, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753370/AllPhoto%20PhotoFinder/family%20photos/CNS-1732-5cf048085f912_srohil.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 10, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636753370/AllPhoto%20PhotoFinder/family%20photos/EG-3-1-801x1200_t7dfvn.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 11, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754063/AllPhoto%20PhotoFinder/pet%20photos/winter-family-dog-photoshoot-chinchilla-photography-dunstable-bedfordshire-10_3_hgrlys.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 11, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754063/AllPhoto%20PhotoFinder/pet%20photos/pet_and_owner_photoshoot_uk_pcylhc.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 11, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754063/AllPhoto%20PhotoFinder/pet%20photos/tips-for-working-with-animals-at-a-photoshoot-735173_1733x_hhi6a5.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 12, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754063/AllPhoto%20PhotoFinder/pet%20photos/robbie-1000-Edit-1160x700_wircu6.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 12, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754062/AllPhoto%20PhotoFinder/pet%20photos/6365cd2c4430bb0b3f2f0dc024acd8b9_d2azgz.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 12, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754062/AllPhoto%20PhotoFinder/pet%20photos/images_3_ewtep9.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 13, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754062/AllPhoto%20PhotoFinder/pet%20photos/husky-wedding-photo3_nexvyg.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 13, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754062/AllPhoto%20PhotoFinder/pet%20photos/images_foli0k.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 13, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754062/AllPhoto%20PhotoFinder/pet%20photos/images_2_iv2xle.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 14, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754062/AllPhoto%20PhotoFinder/pet%20photos/images_1_tg2rdz.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 14, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754062/AllPhoto%20PhotoFinder/pet%20photos/Autumn_Family_Photoshoot_-_Ampthill_Park_-_Bedford-2_hovg25.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 14, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754062/AllPhoto%20PhotoFinder/pet%20photos/dXyHiRWLWjeYYBZoRPM7_1082134855_mb4hgx.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 15, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754061/AllPhoto%20PhotoFinder/pet%20photos/836ef87ddfe1603112e21ccb69bd9af4_rijdsi.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 15, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754061/AllPhoto%20PhotoFinder/pet%20photos/8E6A0881_wr1pna.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 15, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754061/AllPhoto%20PhotoFinder/pet%20photos/746dab017f2d7f3c5da3aa7b1995d706_qfxpfv.jpg', type: 'pet', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 16, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754560/AllPhoto%20PhotoFinder/family%20photos/LaurenCheriePhotography_-5_ucuskr.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 16, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754559/AllPhoto%20PhotoFinder/family%20photos/lander-family_w2ccdi.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 16, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754559/AllPhoto%20PhotoFinder/family%20photos/maxresdefault_bozeo9.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 17, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754559/AllPhoto%20PhotoFinder/family%20photos/images_ikjbfb.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 17, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754559/AllPhoto%20PhotoFinder/family%20photos/images_6_mihlbs.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 17, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754559/AllPhoto%20PhotoFinder/family%20photos/images_5_ogx8dw.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 18, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754558/AllPhoto%20PhotoFinder/family%20photos/image-asset_kejcud.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 18, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754559/AllPhoto%20PhotoFinder/family%20photos/central-park-photography-locations-daisy-beatty-2_pp_w768_h1152_ihmosc.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 18, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754559/AllPhoto%20PhotoFinder/family%20photos/images_4_bt5lda.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 19, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754559/AllPhoto%20PhotoFinder/family%20photos/familyphotoshootlondon-1_cxqtey.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 19, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754558/AllPhoto%20PhotoFinder/family%20photos/images_3_s6tsoy.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 19, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754558/AllPhoto%20PhotoFinder/family%20photos/images_2_fbuhzv.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 20, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754558/AllPhoto%20PhotoFinder/family%20photos/family-portrait-photographer-emily-brunner-photography-40_gpzsom.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 20, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754558/AllPhoto%20PhotoFinder/family%20photos/Carnation-family-photographer_-mcdonald-park_-summer-family-photos_-Cassie-Pepper-photography_-Chambray-wardrobe-pastel-family-Outfits-River-golden-Hour-lifestyle-family-photos_-Candid-R_ocsnaa.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 20, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636754558/AllPhoto%20PhotoFinder/family%20photos/images_1_vpsc0n.jpg', type: 'family', createdAt: new Date(), updatedAt:new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Photos', null, {});
  }
};
