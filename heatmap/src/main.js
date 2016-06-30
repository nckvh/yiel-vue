import Super_Scraper from '../private_modules/@yieldifyusa/super_scraper';
import $ from '../node_modules/jquery';

window.yiel = {};
window.yiel.$ = $;
window.yiel.dataLayer = {};


window.ss = new Super_Scraper();
const ss = window.ss;

//--------------------------------------------------------------------
            //YIEL DATA LAYER / SUPER_SCRAPER REACTIVITY


//  an array of targets to observe
const targets = [

    yiel.$("#username")[0],
    yiel.$("#link")[0],
    yiel.$("#username")[0],
    yiel.$("#bg")[0],
];

(function basketObs(){
    const targetInfo = {
        name: 'basket',
        selector: yiel.$("#basket")[0],
        callback(mutation){
            yiel.dataLayer[this.name] = mutation.target.outerText
        }
    };
    initObs(targetInfo);
})();

function initObs(targetInfo){
    //  on each mutation observed, update yiel.dataLayer
    const obs = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            targetInfo.callback(mutation)
        })
    });
    //  watch all mutation types
    const config = { attributes: true, childList: true, characterData: true }

    //init observer on each element in targets array
    obs.observe(targetInfo.selector, config);
}



//--------------------------------------------------------------------
