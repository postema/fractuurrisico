    jQuery(document).ready(function ($) {
        // $('body').prop('data-spy', "scroll");
        // $('body').prop('data-target', "tab3");
        console.log('start');
		const fr = {};
        let fr.leeftijd = ''; // keuze uit 'l40', 'l50', 'l60', 'l70', 'l75'
        let fr.route = ''; // keuze uit '', 'standaard', 'dxa'
        let fr.groep0 = true; //ongedefinieerde groep
        let fr.groep1 = false; // 50 + #
        let fr.groep2 = false; // 40 + pred
        let fr.groep3 = false; // 60 + risicoscore 4 of meer
        let fr.fract = ''; // keuze uit '', 'geen', 'recent', 'verdenking', 'wervel', 'geenwervel'
        let fr.pred = ''; // keuze uit '', 'geen', 'kort', 'laag', 'hoog', 'xhoog'
        let fr.bmd = ''; // keuze uit '', 'n', 'm1', 'm2', 'l', 'xl'
        let fr.vfa = ''; // keuze uit '', 'gr0', 'gr1', 'gr2', 'gr3'

//         let compleet = 0;
/*
        const setWell = (g1, g2, g360, g370, g375, route) => {
            let g3 = false;
            if (g360 || g370 || g375) {
                g3 = true;
            } else {
                g3 = false;
            }
            if (g1 || g2 || g3) {
                if (route === "dxa") {
                    $('#divFLeeftijdscriterium').hide();
                    $('#divRouteKiezen').hide();
                    $('#idLeeftijd').removeClass('alert-info').addClass('alert-success');
                    $('#route').removeClass('alert-info').addClass('alert-success');
                    if (g1) {
                        $('#idGroep1').show();
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else if (g2) {
                        $('#idGroep1').hide();
                        $('#idFract').removeClass('alert-info');
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else if (g3) {
                        $('#idGroep1').show();
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else {
                        $('#idGroep1').hide();
                        $('#idFract').removeClass('alert-info');
                        $('#idGroep2').hide();
                        $('#idPred').removeClass('alert-info');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    }
                } else if (route === "standaard") {
                    $('#divFLeeftijdscriterium').hide();
                    $('#divRouteKiezen').hide();
                    $('#idLeeftijd').removeClass('alert-info').addClass('alert-success');
                    $('#route').removeClass('alert-info').addClass('alert-success');
                    if (g1) {
                        $('#idGroep1').show();
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else if (g2) {
                        $('#idGroep1').hide();
                        $('#idFract').removeClass('alert-info');
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else if (g3) {
                        $('#idGroep1').show();
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').show();
                        $('#idVraag').addClass('alert-info'). removeClass('alert-success');
                        $('#divFTotaal').hide();
                    } else {
                        $('#idGroep1').hide();
                        $('#idFract').removeClass('alert-info');
                        $('#idGroep2').hide();
                        $('#idPred').removeClass('alert-info');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    }
                } else { // route nog niet bekend
                    $('#divRouteKiezen').show();
                    $('#idLeeftijd').addClass('alert-info').removeClass('alert-success');
                    $('#idGroep1').hide();
                    $('#idFract').removeClass('alert-info');
                    $('#idGroep2').hide();
                    $('#idPred').removeClass('alert-info');
                    $('#idGroep3').hide();
                    $('#idVraag').removeClass('alert-info');
                    $('#divFTotaal').hide();
                }
            } else {
                $('#divFLeeftijdscriterium').show();
                $('#divRouteKiezen').show();
                $('#idLeeftijd').addClass('alert-info').removeClass('alert-success');
                $('#route').addClass('alert-info').removeClass('alert-success');
                $('#idGroep1').hide();
                $('#idFract').removeClass('alert-info');
                $('#idGroep2').hide();
                $('#idPred').removeClass('alert-info');
                $('#idGroep3').hide();
                $('#idVraag').removeClass('alert-info');
                $('#divFTotaal').hide();
            }
            groep1 = g1;
            groep2 = g2;
            groep3 = g3;
            console.log(g1, g2, g360, g370, g375, g3);
        }
*/
        const setWell1 = (fr.leeftijd, fr.route) => {
            let g1, g2, g3;
            (fr.leeftijd === 'l40') ? g2 = true : g2 = false;
            (fr.leeftijd === 'l50') ? g1 = true : g1 = false;
            ((fr.leeftijd === 'l60') || (fr.leeftijd === 'l70') || (fr.leeftijd === 'l75')) ? g3 = true : g3 = false;
            
            if (g1 || g2 || g3) {
                if (fr.route === "dxa") {
                    $('#divFLeeftijdscriterium').hide();
                    $('#divRouteKiezen').hide();
                    $('#idLeeftijd').removeClass('alert-info').addClass('alert-success');
                    $('#route').removeClass('alert-info').addClass('alert-success');

                    if (g1) {
                        $('#idGroep1').show();
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#divFractuurwv').hide();
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else if (g2) {
                        $('#idGroep1').hide();
                        $('#idFract').removeClass('alert-info');
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else if (g3) {
                        $('#idGroep1').show();
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#divFractuurwv').hide();
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else {
                        $('#idGroep1').hide();
                        $('#idFract').removeClass('alert-info');
                        $('#idGroep2').hide();
                        $('#idPred').removeClass('alert-info');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    }
                } else if (fr.route === "standaard") {
                    $('#divFLeeftijdscriterium').hide();
                    $('#divRouteKiezen').hide();
                    $('#idLeeftijd').removeClass('alert-info').addClass('alert-success');
                    $('#route').removeClass('alert-info').addClass('alert-success');
                    if (g1) {
                        $('#idGroep1').show();
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#divFractuurwv').show();
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else if (g2) {
                        $('#idGroep1').hide();
                        $('#idFract').removeClass('alert-info');
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    } else if (g3) {
                        $('#idGroep1').show();
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#divFractuurwv').show();
                        $('#idGroep2').show();
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idGroep3').show();
                        $('#idVraag').addClass('alert-info'). removeClass('alert-success');
                        $('#divFTotaal').hide();
                    } else {
                        $('#idGroep1').hide();
                        $('#idFract').removeClass('alert-info');
                        $('#idGroep2').hide();
                        $('#idPred').removeClass('alert-info');
                        $('#idGroep3').hide();
                        $('#idVraag').removeClass('alert-info');
                        $('#divFTotaal').hide();
                    }
                } else { // route nog niet bekend
                    $('#divRouteKiezen').show();
                    $('#idLeeftijd').addClass('alert-info').removeClass('alert-success');
                    $('#idGroep1').hide();
                    $('#idFract').removeClass('alert-info');
                    $('#idGroep2').hide();
                    $('#idPred').removeClass('alert-info');
                    $('#idGroep3').hide();
                    $('#idVraag').removeClass('alert-info');
                    $('#divFTotaal').hide();
                }
            } else {
                $('#divFLeeftijdscriterium').show();
                $('#divRouteKiezen').show();
                $('#idLeeftijd').addClass('alert-info').removeClass('alert-success');
                $('#route').addClass('alert-info').removeClass('alert-success');
                $('#idGroep1').hide();
                $('#idFract').removeClass('alert-info');
                $('#idGroep2').hide();
                $('#idPred').removeClass('alert-info');
                $('#idGroep3').hide();
                $('#idVraag').removeClass('alert-info');
                $('#divFTotaal').hide();
            }
            // groep1 = g1;
            // groep2 = g2;
            // groep3 = g3;
            // console.log(g1, g2, g360, g370, g375, g3);
            console.log(g1, g2, g3);
        }

        const setLeeftijdsKeuze = (g1, g2, g360, g370, g375) => {
            $('#leeftijd75').prop("checked", g375);
            $('#leeftijd70').prop("checked", g370);
            $('#leeftijd60').prop("checked", g360);
            $('#leeftijd50').prop("checked", g1);
            $('#leeftijd40').prop("checked", g2);
            console.log(g1, g2, g360, g370, g375);
        }

        const setRoute = (fr.route) => {
            if (fr.route === 'standaard') {
                $('#route').removeClass('alert-info').addClass('alert-success');
                $('#routeStandaard').removeClass('btn-primary').removeClass('btn-outline-primary').removeClass('btn-sm').addClass('btn-success');
                $('#routeDXA').removeClass('btn-success').removeClass('btn-primary').addClass('btn-sm').addClass('btn-outline-primary');
            } else if (fr.route === 'dxa') {
                $('#route').removeClass('alert-info').addClass('alert-success');
                $('#routeStandaard').removeClass('btn-success').removeClass('btn-primary').addClass('btn-sm').addClass('btn-outline-primary');
                $('#routeDXA').removeClass('btn-primary').removeClass('btn-outline-primary').removeClass('btn-sm').addClass('btn-success');
            } else {
                $('#route').removeClass('alert-success').addClass('alert-info');
                $('#routeStandaard').removeClass('btn-success').removeClass('btn-primary').removeClass('btn-outline-primary').removeClass('btn-sm').addClass('btn-primary');
                $('#routeDXA').removeClass('btn-success').removeClass('btn-primary').removeClass('btn-outline-primary').removeClass('btn-sm').addClass('btn-primary');
            }
        }

        const setFractuurKeuze = (f0, f1, f2) => {
            $('#fractuurwv').prop("checked", f2);
            $('#fractuur').prop("checked", f1);
            $('#fractuurgeen').prop("checked", f0);
            console.log('fractuur: ', f0, f1, f2);
        }

        const setDexaKeuze = (d0, d1, d2, d3, d4) => {
            $('#bmdxlow').prop("checked", d4);
            $('#bmdlow').prop("checked", d3);
            $('#bmdmargin1').prop("checked", d1);
            $('#bmdmargin2').prop("checked", d2);
            $('#bmdnormal').prop("checked", d0);
            console.log('dexa: ', d0, d1, d2, d3, d4);
        }

        const setVFAKeuze = (v0, v1, v2, v2x2, v3) => {
            $('#fractuurw3').prop("checked", v3);
            $('#fractuurw2x2').prop("checked", v2x2);
            $('#fractuurw2').prop("checked", v2);
            $('#fractuurw1').prop("checked", v1);
            $('#fractuurw0').prop("checked", v0);
            console.log('vfa: ', v0, v1, v2, v2x2, v3);
        }

        const setXKeuze = (v, vx) => {
            $('#fractuurw').prop("checked", v);
            $('#fractuurwx').prop("checked", vx);
            console.log('x-wk: ', v, vx);
        }

        const setPrednisonKeuze = (p0, p1, p2, p3, p4) => {
            $('#predlangxhoog').prop("checked", p4);
            $('#predlanghoog').prop("checked", p3);
            $('#predlanglaag').prop("checked", p2);
            $('#predkort').prop("checked", p1);
            $('#predgeen').prop("checked", p0);
            console.log('prednison: ', p0, p1, p2, p3, p4);
        }

        const setBehandelKeuze = (b0, b1, b2, b3, b4, b5) => {
            $('#geenbeh').prop("checked", b0);
            $('#bmdover').prop("checked", b1);
            $('#bmdbeh').prop("checked", b2);
            $('#vfabeh').prop("checked", b3);
            $('#predhoogbeh').prop("checked", b4);
            $('#verwijs').prop("checked", b5);
            if (b1 || b2 || b3 || b4) {
                $('#idLab').show();
                $('#idVerwijs').hide();
            } else if (b5) {
                $('#idLab').hide();
                $('#idVerwijs').show();
            } else {
                $('#idLab').hide();
                $('#idVerwijs').hide();
            }
            console.log('behandeling: ', b0, b1, b2, b3, b4, b5);
        }

        $('input[id=leeftijd40]').on('click', function () {
            if (fr.leeftijd !== '') {
                if (fr.leeftijd === 'l40') {
                    fr.leeftijd = '';
                    // setWell(false, false, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, false, false, false, false);
                } else {
                    fr.leeftijd = 'l40';
                    // setWell(false, true, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, true, false, false, false);
                }
            } else {
                fr.leeftijd = 'l40';
                // setWell(false, true, false, false, false, route);
                setWell1(fr.leeftijd, fr.route);
                setLeeftijdsKeuze(false, true, false, false, false);
            }
            console.log(fr.leeftijd, fr.groep0, fr.groep1, fr.groep2, fr.groep3);
        });
        $('input[id=leeftijd50]').on('click', function () {
            if (fr.leeftijd !== '') {
                if (fr.leeftijd === 'l50') {
                    fr.leeftijd = '';
                    // setWell(false, false, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, false, false, false, false);
                } else {
                    fr.leeftijd = 'l50';
                    // setWell(true, false, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(true, false, false, false, false);
                }
            } else {
                fr.leeftijd = 'l50';
                // setWell(true, false, false, false, false, route);
                setWell1(fr.leeftijd, fr.route);
                setLeeftijdsKeuze(true, false, false, false, false);
            }
            console.log(fr.leeftijd, fr.groep0, fr.groep1, fr.groep2, fr.groep3);
        });
        $('input[id=leeftijd60]').on('click', function () {
            if (fr.leeftijd !== '') {
                if (fr.leeftijd === 'l60') {
                    fr.leeftijd = '';
                    // setWell(false, false, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, false, false, false, false);
                } else {
                    fr.leeftijd = 'l60';
                    // setWell(false, false, true, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, false, true, false, false);
                }
            } else {
                fr.leeftijd = 'l60';
                // setWell(false, false, true, false, false, route);
                setWell1(fr.leeftijd, fr.route);
                setLeeftijdsKeuze(false, false, true, false, false);
            }
            console.log(fr.leeftijd, fr.groep0, fr.groep1, fr.groep2, fr.groep3);
        });
        $('input[id=leeftijd70]').on('click', function () {
            if (fr.leeftijd !== '') {
                if (fr.leeftijd === 'l70') {
                    fr.leeftijd = '';
                    // setWell(false, false, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, false, false, false, false);
                } else {
                    fr.leeftijd = 'l70';
                    // setWell(false, false, false, true, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, false, false, true, false);
                }
            } else {
                fr.leeftijd = 'l70';
                // setWell(false, false, false, true, false, route);
                setWell1(fr.leeftijd, fr.route);
                setLeeftijdsKeuze(false, false, false, true, false);
            }
            console.log(fr.leeftijd, fr.groep0, fr.groep1, fr.groep2, fr.groep3);
        });
        $('input[id=leeftijd75]').on('click', function () {
            if (fr.leeftijd !== '') {
                if (fr.leeftijd === 'l75') {
                    fr.leeftijd = '';
                    // setWell(false, false, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, false, false, false, false);
                } else {
                    fr.leeftijd = 'l75';
                    // setWell(false, false, false, false, true, route);
                    setWell1(fr.leeftijd, fr.route);
                    setLeeftijdsKeuze(false, false, false, false, true);
                }
            } else {
                fr.leeftijd = 'l75';
                // setWell(false, false, false, false, true, route);
                setWell1(fr.leeftijd, fr.route);
                setLeeftijdsKeuze(false, false, false, false, true);
            }
            console.log(fr.leeftijd, fr.groep0, fr.groep1, fr.groep2, fr.groep3);
        });

        $('button[id=routeStandaard]').on('click', function () {
            if (fr.route !== '') {
                if (fr.route === 'standaard') {
                    fr.route = '';
                    setRoute(fr.route);
                    // setWell(false, false, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    // setLeeftijdsKeuze(false, false, false, false, false);
                    $('#afronden').prop("checked", false); // vragen groep 3 inschakelen
                } else {
                    fr.route = 'standaard';
                    setRoute(fr.route);
                    // setWell(false, true, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    // setLeeftijdsKeuze(false, true, false, false, false);
                    $('#afronden').prop("checked", false); // vragen groep 3 inschakelen
                }
            } else {
                fr.route = 'standaard';
                setRoute(fr.route);
                // setWell(false, true, false, false, false, route);
                setWell1(fr.leeftijd, fr.route);
                // setLeeftijdsKeuze(false, true, false, false, false);
                $('#afronden').prop("checked", false); // vragen groep 3 inschakelen
            }
            console.log('Standaard');
        });

        $('button[id=routeDXA]').on('click', function () {
            if (fr.route !== '') {
                if (fr.route === 'dxa') {
                    fr.route = '';
                    setRoute(fr.route);
                    // setWell(false, false, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    // setLeeftijdsKeuze(false, false, false, false, false);
                    $('#afronden').prop("checked", false); // vragen groep 3 inschakelen
                } else {
                    fr.route = 'dxa';
                    setRoute(fr.route);
                    // setWell(false, true, false, false, false, route);
                    setWell1(fr.leeftijd, fr.route);
                    // setLeeftijdsKeuze(false, true, false, false, false);
                    $('#afronden').prop("checked", true); // vragen groep 3 uitschakelen
                }
            } else {
                fr.route = 'dxa';
                setRoute(fr.route);
                // setWell(false, true, false, false, false, route);
                setWell1(fr.leeftijd, fr.route);
                // setLeeftijdsKeuze(false, true, false, false, false);
                $('#afronden').prop("checked", true); // vragen groep 3 uitschakelen
            }
            console.log('DXA-uitslag');
        });

        $('input[id=fractuurgeen]').on('click', function () {
            if (fr.fract !== '') {
                if (fr.fract === 'geen') {
                    fr.fract = '';
                    fr.groep0 = false;
                    setFractuurKeuze(false, false, false);
                    (fr.route === 'dxa') ? $('#idRon').show() : $('#idRon').hide();
                    (fr.route === 'dxa') ? $('#idDexa').show() : $('#idDexa').hide();
                    (fr.route === 'dxa') ? $('#idVFA').show() : $('#idVFA').hide();
                    (fr.route === 'dxa') ? $('#idX').hide() : $('#idX').hide();
                    $('#opmerkingB').is(':visible') ? $('#opmerkingB').hide() : $('#opmerkingB').hide();
                } else {
                    fr.fract = 'geen';
                    fr.groep0 = true;
                    setFractuurKeuze(true, false, false);
                    (fr.route === 'dxa') ? $('#idRon').show() : $('#idRon').hide();
                    (fr.route === 'dxa') ? $('#idDexa').show() : $('#idDexa').hide();
                    (fr.route === 'dxa') ? $('#idVFA').show() : $('#idVFA').hide();
                    (fr.route === 'dxa') ? $('#idX').hide() : $('#idX').hide();
                    $('#opmerkingB').is(':visible') ? $('#opmerkingB').hide() : $('#opmerkingB').hide();
                }
            } else {
                fr.fract = 'geen';
                fr.groep0 = true;
                setFractuurKeuze(true, false, false);
                (fr.route === 'dxa') ? $('#idRon').show() : $('#idRon').hide();
                (fr.route === 'dxa') ? $('#idDexa').show() : $('#idDexa').hide();
                (fr.route === 'dxa') ? $('#idVFA').show() : $('#idVFA').hide();
                (fr.route === 'dxa') ? $('#idX').hide() : $('#idX').hide();
                $('#opmerkingB').is(':visible') ? $('#opmerkingB').hide() : $('#opmerkingB').hide();
            }
        });

        $('input[id=fractuur]').on('click', function () {
            if (fr.fract !== '') {
                if (fr.fract === 'recent') {
                    fr.fract = '';
                    setFractuurKeuze(false, false, false);
                    (fr.route === 'dxa') ? $('#idRon').show() : $('#idRon').hide();
                    (fr.route === 'dxa') ? $('#idDexa').show() : $('#idDexa').hide();
                    (fr.route === 'dxa') ? $('#idVFA').show() : $('#idVFA').hide();
                    $('#idX').hide();
                    $('#opmerkingB').is(':visible') ? $('#opmerkingB').hide() : $('#opmerkingB').hide();
                } else {
                    fr.fract = 'recent';
                    fr.groep1 = true;
                    fr.groep0 = false;
                    setFractuurKeuze(false, true, false);
                    $('#idRon').show();
                    (fr.route === 'dxa') ? $('#idDexa').show() : $('#idDexa').hide();
                    (fr.route === 'dxa') ? $('#idVFA').show() : $('#idVFA').hide();
                    $('#idX').hide();
                    $('#opmerkingB').show();
                }
            } else {
                fr.fract = 'recent';
                fr.groep1 = true;
                fr.groep0 = false;
                setFractuurKeuze(false, true, false);
                $('#idRon').show();
                (fr.route === 'dxa') ? $('#idDexa').show() : $('#idDexa').hide();
                (fr.route === 'dxa') ? $('#idVFA').show() : $('#idVFA').hide();
                $('#idX').hide();
                $('#opmerkingB').show();
            }
        });
        $('input[id=fractuurwv]').on('click', function () {
            if (fr.fract !== '') {
                if (fr.fract === 'verdenking') {
                    fr.fract = '';
                    setFractuurKeuze(false, false, false);
                    $('#idRon').hide();
                    $('#idX').hide();
                    $('#opmerkingB').is(':visible') ? $('#opmerkingB').hide() : $('#opmerkingB').hide();
                } else {
                    fr.fract = 'verdenking';
                    setFractuurKeuze(false, false, true);
                    $('#idRon').show();
                    $('#idX').show();
                    $('#opmerkingB').show();
                }
            } else {
                fr.fract = 'verdenking';
                setFractuurKeuze(false, false, true);
                $('#idRon').show();
                $('#idX').show();
                $('#opmerkingB').show();
            }
        });

        $('input[id=fractuurw0]').on('click', function () {
            if (fr.vfa !== '') {
                if (fr.vfa === 'gr0') {
                    fr.vfa = '';
                    setVFAKeuze(false, false, false, false, false);
                } else {
                    fr.vfa = 'gr0';
                    setVFAKeuze(true, false, false, false, false);
                }
            } else {
                fr.vfa = 'gr0';
                setVFAKeuze(true, false, false, false, false);
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });
        $('input[id=fractuurw1]').on('click', function () {
            if (fr.vfa !== '') {
                if (fr.vfa === 'gr1') {
                    fr.vfa = '';
                    setVFAKeuze(false, false, false, false, false);
                } else {
                    fr.vfa = 'gr1';
                    setVFAKeuze(false, true, false, false, false);
                }
            } else {
                fr.vfa = 'gr1';
                setVFAKeuze(false, true, false, false, false);
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });
        $('input[id=fractuurw2]').on('click', function () {
            if (fr.vfa !== '') {
                if (fr.vfa === 'gr2') {
                    fr.vfa = '';
                    setVFAKeuze(false, false, false, false, false);
                } else {
                    fr.vfa = 'gr2';
                    setVFAKeuze(false, false, true, false, false);
                    $('#idBehandeling').show();
                    $('#divVFAbehandeling').show();
                }
            } else {
                fr.vfa = 'gr2';
                setVFAKeuze(false, false, true, false, false);
                $('#idBehandeling').show();
                $('#divVFAbehandeling').show();
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });
        $('input[id=fractuurw2x2]').on('click', function () {
            if (fr.vfa !== '') {
                if (fr.vfa === 'gr2x2') {
                    fr.vfa = '';
                    setVFAKeuze(false, false, false, false, false);
                } else {
                    fr.vfa = 'gr2x2';
                    setVFAKeuze(false, false, false, true, false);
                    $('#idBehandeling').show();
                    $('#divVFAbehandeling').show();
                }
            } else {
                fr.vfa = 'gr2x2';
                setVFAKeuze(false, false, false, true, false);
                $('#idBehandeling').show();
                $('#divVFAbehandeling').show();
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });
        $('input[id=fractuurw3]').on('click', function () {
            if (fr.vfa !== '') {
                if (fr.vfa === 'gr3') {
                    fr.vfa = '';
                    setVFAKeuze(false, false, false, false, false);
                } else {
                    fr.vfa = 'gr3';
                    setVFAKeuze(false, false, false, false, true);
                    $('#idBehandeling').show();
                    $('#divVFAbehandeling').show();
                }
            } else {
                fr.vfa = 'gr3';
                setVFAKeuze(false, false, false, false, true);
                $('#idBehandeling').show();
                $('#divVFAbehandeling').show();
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });

        $('input[id=fractuurwx]').on('click', function () {
            if (fr.fract !== '') {
                if (fr.fract === 'wervel') {
                    fr.fract = '';
                    setXKeuze(false, false);
                } else {
                    fr.fract = 'wervel';
                    fr.groep1 = true;
                    fr.groep0 = false;
                    setXKeuze(false, true);
                }
            } else {
                fr.fract = 'wervel';
                fr.groep1 = true;
                fr.groep0 = false;
                setXKeuze(false, true);
            }
            if (fr.fract !== '') {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });

        $('input[id=fractuurw]').on('click', function () {
            if (fr.fract !== '') {
                if (fr.fract === 'geenwervel') {
                    fr.fract = '';
                    setXKeuze(false, false);
                } else {
                    fr.fract = 'geenwervel'
                    fr.groep1 = false
                    fr.groep0 = true;
                    setXKeuze(true, false);
                }
            } else {
                fr.fract = 'geenwervel';
                fr.groep1 = false
                fr.groep0 = true;
                setXKeuze(true, false);
            }
            if (fr.fract !== '') {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                if (fr.fract === 'geenwervel') {
                    $('#idDexa').hide();
                    $('#idVFA').hide();
                }
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });

        $('input[id=bmdxlow]').on('click', function () {
            if (fr.bmd !== '') {
                if (fr.bmd === 'xl') {
                    fr.bmd = '';
                    setDexaKeuze(false, false, false, false, false);
                } else {
                    fr.bmd = 'xl';
                    setDexaKeuze(false, false, false, false, true);
                    $('#idBehandeling').show();
                    $('#divBMDbehandeling').show();
                }
            } else {
                fr.bmd = 'xl';
                setDexaKeuze(false, false, false, false, true);
                $('#idBehandeling').show();
                $('#divBMDbehandeling').show();
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });
        $('input[id=bmdlow]').on('click', function () {
            if (fr.bmd !== '') {
                if (fr.bmd === 'l') {
                    fr.bmd = '';
                    setDexaKeuze(false, false, false, false, false);
                } else {
                    fr.bmd = 'l';
                    setDexaKeuze(false, false, false, true, false);
                }
            } else {
                fr.bmd = 'l';
                setDexaKeuze(false, false, false, true, false);
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });
        $('input[id=bmdmargin1]').on('click', function () {
            if (fr.bmd !== '') {
                if (fr.bmd === 'm1') {
                    fr.bmd = '';
                    setDexaKeuze(false, false, false, false, false);
                } else {
                    fr.bmd = 'm1';
                    setDexaKeuze(false, true, false, false, false);
                }
            } else {
                fr.bmd = 'm1';
                setDexaKeuze(false, true, false, false, false);
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });
        $('input[id=bmdmargin2]').on('click', function () {
            if (fr.bmd !== '') {
                if (fr.bmd === 'm2') {
                    fr.bmd = '';
                    setDexaKeuze(false, false, false, false, false);
                } else {
                    fr.bmd = 'm2';
                    setDexaKeuze(false, false, true, false, false);
                }
            } else {
                fr.bmd = 'm2';
                setDexaKeuze(false, false, true, false, false);
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });
        $('input[id=bmdnormal]').on('click', function () {
            if (fr.bmd !== '') {
                if (fr.bmd === 'n') {
                    fr.bmd = '';
                    setDexaKeuze(false, false, false, false, false);
                } else {
                    fr.bmd = 'n';
                    setDexaKeuze(true, false, false, false, false);
                }
            } else {
                fr.bmd = 'n';
                setDexaKeuze(true, false, false, false, false);
            }
            if ((fr.vfa !== '') && (fr.bmd !== '')) {
                $('#ronWell').removeClass('alert-info').addClass('alert-success');
                $('#opmerkingB').hide();
            } else {
                $('#ronWell').removeClass('alert-success').addClass('alert-info');
                $('#opmerkingB').show();
            }
        });

        $('input[id=predgeen]').on('click', function () {
            if (fr.pred !== '') {
                if (fr.pred === 'geen') {                    
                    fr.pred = '';
                    fr.groep0 = false;
                    setPrednisonKeuze(false, false, false, false, false);
                } else {
                    fr.pred = 'geen';
                    fr.groep0 = true;
                    fr.groep2 = false;
                    setPrednisonKeuze(true, false, false, false, false);
                }
            } else {
                fr.pred = 'geen';
                fr.groep0 = true;
                fr.groep2 = false
                setPrednisonKeuze(true, false, false, false, false);
            }
        });
        $('input[id=predkort]').on('click', function () {
            if (fr.pred !== '') {
                if (fr.pred === 'kort') {
                    fr.pred = '';
                    setPrednisonKeuze(false, false, false, false, false);
                } else {
                    fr.pred = 'kort';
                    fr.groep2 = true;
                    fr.groep0 = false;
                    setPrednisonKeuze(false, true, false, false, false);
                }
            } else {
                fr.pred = 'kort';
                fr.groep2 = true;
                fr.groep0 = false;
                setPrednisonKeuze(false, true, false, false, false);
            }
        });
        $('input[id=predlanglaag]').on('click', function () {
            if (fr.pred !== '') {
                if (fr.pred === 'laag') {
                    fr.pred = '';
                    setPrednisonKeuze(false, false, false, false, false);
                } else {
                    fr.pred = 'laag';
                    fr.groep2 = true;
                    fr.groep0 = false;
                    setPrednisonKeuze(false, false, true, false, false);
                }
            } else {
                fr.pred = 'laag';
                fr.groep2 = true;
                fr.groep0 = false;
                setPrednisonKeuze(false, false, true, false, false);
            }
        });
        $('input[id=predlanghoog]').on('click', function () {
            if (fr.pred !== '') {
                if (fr.pred === 'hoog') {
                    fr.pred = '';
                    setPrednisonKeuze(false, false, false, false, false);
                } else {
                    fr.pred = 'hoog';
                    fr.groep2 = true;
                    fr.groep0 = false;
                    setPrednisonKeuze(false, false, false, true, false);
                }
            } else {
                fr.pred = 'hoog';
                fr.groep2 = true;
                fr.groep0 = false;
                setPrednisonKeuze(false, false, false, true, false);
            }
        });
        $('input[id=predlangxhoog]').on('click', function () {
            if (fr.pred !== '') {
                if (fr.pred === 'xhoog') {
                    fr.pred = '';
                    setPrednisonKeuze(false, false, false, false, false);
                } else {
                    fr.pred = 'xhoog';
                    fr.groep2 = true;
                    fr.groep0 = false;
                    setPrednisonKeuze(false, false, false, false, true);
                }
            } else {
                fr.pred = 'xhoog';
                fr.groep2 = true;
                fr.groep0 = false;
                setPrednisonKeuze(false, false, false, false, true);
            }
        });

        $('input[id=afronden]').on('click', function () {
            $('.afr').prop("checked", false);
        });
        $('input[class=afr]').on('click', function () {
            $('#afronden').prop("checked", false);
        });

        $('input[type=checkbox]').on('click', function () {
            // 1. divTotaal leegmaken en lege array
            $('#divFTotaal').empty();
            let fTotaal = 0;
            // 2. geselecteerde checkboxen ophalen en doorlopen
            $('input[type=checkbox]:checked').each(function () {
                // 2a. waarde in array
                if (!isNaN($(this).val())) {
                    fTotaal += Number($(this).val());
                }
            });
            // 3. array in divTotaal plaatsen
            $('#divFTotaal').text('Vraaggestuurd beleid bij totaal fractuur risico: ' + fTotaal);

            let ond = 0;
            switch (fr.leeftijd) {
                case 'l75':
                    console.log('leeftijd = 75');
                    if (fr.route === 'standaard') {
                        console.log('route = standaard');
                        console.log('fTotaal = ', fTotaal);
                        if ($('#afronden').prop("checked")) {
                            // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                            $('#idVraag').addClass('alert-success').removeClass('alert-info');
                            $('#divFTotaal').hide();
                            $('#opmerkingG3').hide();
                            // $('<p>er zijn nog onbeantwoorde onderdelen voor risicogroep 3 (blauw) of kies het 1e item</p>').appendTo('#opmerkingG3 p');
                        } else {
                            if (fTotaal === 2) {
                                fr.groep3 = false;
                                // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                                $('#idVraag').addClass('alert-info').removeClass('alert-success');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').show();
                                $('#idRon').hide();
                                $('#idDexa').hide();
                                $('#idVFA').hide();
                                $('#idX').hide();
                            } else if (fTotaal < 4) {
                                fr.groep3 = false;
                                // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                                $('#idVraag').addClass('alert-success').removeClass('alert-info');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').hide();
                                $('#idRon').hide();
                                $('#idDexa').hide();
                                $('#idVFA').hide();
                                $('#idX').hide();
                            } else {
                                fr.groep3 = true;
                                // $('#divFUitkomst h2').text('Risicogroep 3').addClass('alert-warning').removeClass('alert-danger').removeClass('alert-success');
                                $('#idVraag').addClass('alert-success').removeClass('alert-info');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').hide();
                                $('#idRon').show();
                                $('#idDexa').show();
                                $('#idVFA').show();
                                $('#idX').hide();
                            }
                        }
                    } else if (fr.route === 'dxa') {
                        console.log('route = dxa');
                        ((fr.bmd === 'xl') || (fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) ? fr.groep3 = true : fr.groep3 = false;
                        ((fr.bmd === 'xl') || (fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) ? fr.groep0 = false : fr.groep0 = true;
                        $('#opmerkingG3').hide();
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();                        
                    } else {
                        console.log('route = onbekend'); // do nothing
                    }
                // break; expres commented-out to use the fall-trough behaviour
                case 'l70':
                    console.log('leeftijd = 70');
                    if (fr.route === 'standaard') {
                        console.log('route = standaard');
                        console.log('fTotaal = ', fTotaal);
                        if ($('#afronden').prop("checked")) {
                            // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                            $('#idVraag').addClass('alert-success').removeClass('alert-info');
                            $('#divFTotaal').hide();
                            $('#opmerkingG3').hide();
                            // $('<p>er zijn nog onbeantwoorde onderdelen voor risicogroep 3 (blauw) of kies het 1e item</p>').appendTo('#opmerkingG3 p');
                        } else {
                            if (fTotaal === 2) {
                                fr.groep3 = false;
                                // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                                $('#idVraag').addClass('alert-info').removeClass('alert-success');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').show();
                                $('#idRon').hide();
                                $('#idDexa').hide();
                                $('#idVFA').hide();
                                $('#idX').hide();
                            } else if (fTotaal < 4) {
                                fr.groep3 = false;
                                // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                                $('#idVraag').addClass('alert-success').removeClass('alert-info');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').hide();
                                $('#idRon').hide();
                                $('#idDexa').hide();
                                $('#idVFA').hide();
                                $('#idX').hide();
                            } else {
                                fr.groep3 = true;
                                // $('#divFUitkomst h2').text('Risicogroep 3').addClass('alert-warning').removeClass('alert-danger').removeClass('alert-success');
                                $('#idVraag').addClass('alert-success').removeClass('alert-info');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').hide();
                                $('#idRon').show();
                                $('#idDexa').show();
                                $('#idVFA').show();
                                $('#idX').hide();
                            }
                        }
                    } else if (fr.route === 'dxa') {
                        console.log('route = dxa');
                        ((fr.bmd === 'xl') || (fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) ? fr.groep3 = true : fr.groep3 = false;
                        ((fr.bmd === 'xl') || (fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) ? fr.groep0 = false : fr.groep0 = true;
                        $('#opmerkingG3').hide();
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();                        
                    } else {
                        console.log('route = onbekend'); // do nothing
                    }
                // break; expres commented-out to use the fall-trough behaviour
                case 'l60':                    
                    console.log('leeftijd = 60');
                    if (fr.route === 'standaard') {
                        console.log('route = standaard');
                        console.log('fTotaal = ', fTotaal);
                        if ($('#afronden').prop("checked")) {
                            // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                            $('#idVraag').addClass('alert-success').removeClass('alert-info');
                            $('#divFTotaal').hide();
                            $('#opmerkingG3').hide();
                            // $('<p>er zijn nog onbeantwoorde onderdelen voor risicogroep 3 (blauw) of kies het 1e item</p>').appendTo('#opmerkingG3 p');
                        } else {
                            if (fTotaal === 1) {
                                fr.groep3 = false;
                                // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                                $('#idVraag').addClass('alert-info').removeClass('alert-success');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').show();
                                $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                                $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                                $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                                $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                            } else if (fTotaal < 4) {
                                fr.groep3 = false;
                                // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                                $('#idVraag').addClass('alert-success').removeClass('alert-info');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').hide();
                                $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                                $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                                $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                                $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                            } else {
                                fr.groep3 = true;
                                // $('#divFUitkomst h2').text('Risicogroep 3').addClass('alert-warning').removeClass('alert-danger').removeClass('alert-success');
                                $('#idVraag').addClass('alert-success').removeClass('alert-info');
                                $('#divFTotaal').show();
                                $('#opmerkingG3').hide();
                                $('#idRon').show();
                                $('#idDexa').show();
                                $('#idVFA').show();
                                $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                            }
                        }
                    } else if (fr.route === 'dxa') {
                        console.log('route = dxa');
                        ((fr.bmd === 'xl') || (fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) ? fr.groep3 = true : fr.groep3 = false;
                        ((fr.bmd === 'xl') || (fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) ? fr.groep0 = false : fr.groep0 = true;
                        $('#opmerkingG3').hide();
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();                        
                    } else {
                        console.log('route = onbekend'); // do nothing
                    }
                // break; expres commented-out to use the fall-trough behaviour
                case 'l50':
                    // keuze uit '', 'geen', 'recent', 'verdenking', 'wervel', 'geenwervel'
                    if (fr.fract === '') {
                        fr.groep1 = false;
                        fr.groep0 = true;
                        // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#opmerkingG1').show();
                        // $('<p>er zijn nog onbeantwoorde onderdelen voor risicogroep 1 (blauw)</p>').appendTo('opmerkingG1 p');
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else if (fr.fract === 'geen' || fr.fract === 'geenwervel') {
                        fr.groep1 = false;                        
                        (fr.route === 'dxa') ? fr.groep0 = true : fr.groep0 = false;
                        // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#opmerkingG1').hide();
                        $('#idFract').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else if (fr.fract === 'recent') {
                        fr.groep1 = true;
                        fr.groep0 = false;
                        // $('#divFUitkomst h2').text('Risicogroep 1').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#opmerkingG1').hide();
                        $('#idFract').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else if (fr.fract === 'verdenking') {
                        fr.groep1 = false;
                        // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#opmerkingG1').hide();
                        $('#idFract').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').show();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').show();
                    } else if (fr.fract === 'wervel') {
                        fr.groep1 = true;
                        fr.groep0 = false;
                        // $('#divFUitkomst h2').text('Risicogroep 1').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#opmerkingG1').hide();
                        $('#idFract').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').show();
                    } else {
                        fr.groep1 = false;
                        // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#opmerkingG1').show();
                        // $('<p>er zijn nog onbeantwoorde onderdelen voor risicogroep 1 (blauw)</p>').appendTo('#opmerkingG1 p');
                        $('#idFract').addClass('alert-info').removeClass('alert-success');
                        $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    }
                    console.log('leeftijd = 50');
                // break; expres commented-out to use the fall-trough behaviour
                case 'l40':
                    if (fr.pred === '') {
                        fr.groep2 = false;
                        // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#opmerkingG2').show();
                        // $('<p>er zijn nog onbeantwoorde onderdelen voor risicogroep 2 (blauw)</p>').appendTo('#opmerkingG2 p');
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else if (fr.pred === 'geen') {
                        fr.groep2 = false;
                        (fr.route === 'dxa') ? fr.groep0 = true : fr.groep0 = false; 
                        // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#opmerkingG2').hide();
                        $('#idPred').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else if (fr.pred === 'kort') {
                        fr.groep2 = true;
                        fr.groep0 = false;
                        // $('#divFUitkomst h2').text('Risicogroep 2').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#opmerkingG2').hide();
                        $('#idPred').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else if (fr.pred === 'laag') {
                        fr.groep2 = true;
                        fr.groep0 = false;
                        // $('#divFUitkomst h2').text('Risicogroep 2').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#opmerkingG2').hide();
                        $('#idPred').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else if (fr.pred === 'hoog') {
                        fr.groep2 = true;
                        fr.groep0 = false;
                        // $('#divFUitkomst h2').text('Risicogroep 2').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#opmerkingG2').hide();
                        $('#idPred').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else if (fr.pred === 'xhoog') {
                        fr.groep2 = true;
                        fr.groep0 = false;
                        // $('#divFUitkomst h2').text('Risicogroep 2').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#opmerkingG2').hide();
                        $('#idPred').addClass('alert-success').removeClass('alert-info');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else {
                        fr.groep2 = false;
                        // $('#divFUitkomst h2').text('Laag risicogroep').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#opmerkingG1').show();
                        // $('<p>er zijn nog onbeantwoorde onderdelen voor risicogroep 2 (blauw)</p>').appendTo('#opmerkingG2 p');
                        $('#idPred').addClass('alert-info').removeClass('alert-success');
                        $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    }
                    console.log('leeftijd = 40');
                // break; expres commented-out to use the fall-trough behaviour
                default:
                    // keuze uit 'n', 'm', 'l', 'xl'
                    if (fr.bmd === 'n') {
                        // $('.behandeling').hide();
                        console.log('bmd normaal');
                    } else if (fr.bmd === 'm1') {
                        // $('.behandeling').hide();
                        console.log('bmd marginaal1');
                    } else if (fr.bmd === 'm2') {
                        // $('.behandeling').hide();
                        console.log('bmd marginaal2');
                    } else if (fr.bmd === 'l') {
                        // $('#divBMDbehandeling').prop("checked", true);
                        console.log('bmd laag');
                    } else if (fr.bmd === 'xl') {
                        // $('#divBMDbehandeling').prop("checked", true);
                        console.log('bmd extralaag');
                    } else {
                        // $('#divBMDbehandeling').prop("checked", false);
                        console.log('bmd niet gevuld');
                    }
                    // keuze uit 'gr0', 'gr1', 'gr2', 'gr3'
                    if (fr.vfa === 'gr0') {
                        // $('.behandeling').hide();
                    } else if (fr.vfa === 'gr1') {
                        // $('.behandeling').hide();
                    } else if (fr.vfa === 'gr2') {
                        // $('#divVFAbehandeling').prop("checked", true);
                    } else if (fr.vfa === 'gr3') {
                        // $('#divVFAbehandeling').prop("checked", true);
                    } else {
                        // $('#divVFAbehandeling').prop("checked", false);
                    }
                    console.log('hoe kom je hier?');
                // break; expres commented-out to use the fall-trough behaviour
            }

            let uitk = 0;
            (fr.route === 'dxa') ? uitk += 1000 : uitk;
            fr.groep3 ? uitk += 100 : uitk;
            fr.groep2 ? uitk += 10 : uitk;
            fr.groep1 ? uitk += 1 : uitk;

            switch (uitk) {
// dxa route
                case 1111: // risico groep 3+2+1
                    if (fr.leeftijd === 'l75') {
                        $('#divFUitkomst h2').text('Risicogroep 1 + 2 + 3');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    } else{
                        $('#divFUitkomst h2').text('Risicogroep 1 + 2 + 3');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    }
                    break;
                case 1110: // risico groep 3+2
                    if (fr.leeftijd === 'l75') {
                        $('#divFUitkomst h2').text('Risicogroep 2 + 3');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    } else{
                        $('#divFUitkomst h2').text('Risicogroep 2 + 3');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    }
                    break;
                case 1101: // risico groep 3+1
                    $('#divFUitkomst h2').text('Risicogroep 1 + 3');
                    $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                    $('#idRon').show();
                    $('#idDexa').show();
                    $('#idVFA').show();
                    $('#idX').hide();
                    break;
                case 1100: // risico groep 3
                    $('#divFUitkomst h2').text('Risicogroep 3');
                    $('#divFUitkomst').addClass('alert-warning').removeClass('alert-danger').removeClass('alert-success');
                    $('#idRon').show();
                    $('#idDexa').show();
                    $('#idVFA').show();
                    $('#idX').hide();
                    break;
                case 1011: // risico groep 2+1
                    if (fr.leeftijd === 'l75') {
                        $('#divFUitkomst h2').text('Risicogroep 1 + 2');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    } else{
                        $('#divFUitkomst h2').text('Risicogroep 1 + 2');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    }
                    break;
                case 1010: // risico groep 2
                    if (fr.leeftijd === 'l75') {
                        $('#divFUitkomst h2').text('Risicogroep 2');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    } else{
                        $('#divFUitkomst h2').text('Risicogroep 2');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    }
                    break;
                case 1001: // risico groep 1
                    $('#divFUitkomst h2').text('Risicogroep 1');
                    $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                    $('#idRon').show();
                    $('#idDexa').show();
                    $('#idVFA').show();
                    $('#idX').hide();
                    break;
                case 1000: // risico groep 0
                    if (fr.fract === 'geenwervel') {
                        $('#divFUitkomst h2').text('Laag risicogroep');
                        $('#divFUitkomst').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    } else {
                        $('#divFUitkomst h2').text('Valt mogelijk buiten deze standaard, let op secundaire oorzaak');
                        $('#divFUitkomst').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').hide();
                    }
                    break;
// standaard route
                case 111: // risico groep 3+2+1
                    if (fr.leeftijd === 'l75') {
                        $('#divFUitkomst h2').text('Risicogroep 1 + 2 + 3');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').hide();
                        $('#idDexa').hide();
                        $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else{
                        $('#divFUitkomst h2').text('Risicogroep 1 + 2 + 3');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    }
                    break;
                case 110: // risico groep 3+2
                    if (fr.leeftijd === 'l75') {
                        $('#divFUitkomst h2').text('Risicogroep 2 + 3');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').hide();
                        $('#idDexa').hide();
                        $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else{
                        $('#divFUitkomst h2').text('Risicogroep 2 + 3');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    }
                    break;
                case 101: // risico groep 3+1
                    $('#divFUitkomst h2').text('Risicogroep 1 + 3');
                    $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                    $('#idRon').show();
                    $('#idDexa').show();
                    $('#idVFA').show();
                    $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    break;
                case 100: // risico groep 3
                    $('#divFUitkomst h2').text('Risicogroep 3');
                    $('#divFUitkomst').addClass('alert-warning').removeClass('alert-danger').removeClass('alert-success');
                    $('#idRon').show();
                    $('#idDexa').show();
                    $('#idVFA').show();
                    $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    break;
                case 11: // risico groep 2+1
                    if (fr.leeftijd === 'l75') {
                        $('#divFUitkomst h2').text('Risicogroep 1 + 2');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').hide();
                        $('#idDexa').hide();
                        $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else{
                        $('#divFUitkomst h2').text('Risicogroep 1 + 2');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    }
                    break;
                case 10: // risico groep 2
                    if (fr.leeftijd === 'l75') {
                        $('#divFUitkomst h2').text('Risicogroep 2');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').hide();
                        $('#idDexa').hide();
                        $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    } else{
                        $('#divFUitkomst h2').text('Risicogroep 2');
                        $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                        $('#idRon').show();
                        $('#idDexa').show();
                        $('#idVFA').show();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    }
                    break;
                case 1: // risico groep 1
                    $('#divFUitkomst h2').text('Risicogroep 1');
                    $('#divFUitkomst').addClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');
                    $('#idRon').show();
                    $('#idDexa').show();
                    $('#idVFA').show();
                    $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    break;
                default:
                    if (fr.fract === 'geenwervel') {
                        $('#divFUitkomst h2').text('Laag risicogroep');
                        $('#divFUitkomst').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#idRon').show();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').show();
                    } else {
                        $('#divFUitkomst h2').text('Laag risicogroep');
                        $('#divFUitkomst').addClass('alert-success').removeClass('alert-danger').removeClass('alert-warning');
                        $('#idRon').is(':visible') ? $('#idRon').show() : $('#idRon').hide();
                        $('#idDexa').is(':visible') ? $('#idDexa').show() : $('#idDexa').hide();
                        $('#idVFA').is(':visible') ? $('#idVFA').show() : $('#idVFA').hide();
                        $('#idX').is(':visible') ? $('#idX').show() : $('#idX').hide();
                    }
                    break;
            }

            let beh = 0;
            (fr.route === 'dxa') ? beh += 1000 : beh;
            fr.groep3 ? beh += 100 : beh;
            fr.groep2 ? beh += 10 : beh;
            fr.groep1 ? beh += 1 : beh;

            switch (beh) {
// dxa route
                case 1111: // risico groep 3+2+1
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    if (fr.leeftijd === 'l75') {
                        setBehandelKeuze(false, false, false, false, false, true);
                    } else if (fr.pred === 'xhoog') {
                        setBehandelKeuze(false, false, false, false, true, false); //TODO of is dit toch verwijzen?
                    } else {
                        (fr.fract === 'geenwervel') ? $('#geenbeh').prop("checked", true) : $('#geenbeh').prop("checked", false);
                        (fr.fract === 'geenwervel') ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                        if (fr.bmd === 'xl') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, false, true, false, false, false); // TODO klopt dit wel, tekst is hier onduidelijk over, Jernt gevraagd
                            }
                        } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(false, false, true, true, false, false);
                            }
                        } else if (fr.bmd === 'm1') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 1110: // risico groep 3+2
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    if (fr.leeftijd === 'l75') {
                        setBehandelKeuze(false, false, false, false, false, true);
                    } else if (fr.pred === 'xhoog') {
                        setBehandelKeuze(false, false, false, false, true, false); //TODO of is dit toch verwijzen?
                    } else {
                        if (fr.bmd === 'xl') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                }
                            }
                        } else if (fr.bmd === 'l') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, true, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, true, false, false);
                                }
                            } else {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                }
                            }
                        } else if (fr.bmd === 'm2') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else if (fr.bmd === 'm1') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 1101: // risico groep 3+1
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    (fr.fract === 'geenwervel') ? $('#geenbeh').prop("checked", true) : $('#geenbeh').prop("checked", false);
                    (fr.fract === 'geenwervel') ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    if (fr.bmd === 'xl') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else {
                            setBehandelKeuze(false, false, true, false, false, false); // TODO klopt dit wel, tekst is hier onduidelijk over, Jernt gevraagd
                        }
                    } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                        if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else if (fr.vfa === 'gr2') {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(false, false, true, true, false, false);
                        }
                    } else if (fr.bmd === 'm1') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else {
                        setBehandelKeuze(true, false, false, false, false, false);
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 1100: // risico groep 3
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-warning').removeClass('alert-success').removeClass('alert-info').removeClass('alert-danger');
                    // $('#geenbeh').prop("checked", false);
                    if (fr.bmd === 'xl') {
                        if (fr.leeftijd === 'l60') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, true, false, false, false, false);
                            }
                        } else {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, false, true, false, false, false);
                            }
                        }
                    } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                        if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else if (fr.vfa === 'gr2') {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else if (fr.bmd === 'm1') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else {
                        setBehandelKeuze(true, false, false, false, false, false);
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 1011: // risico groep 2+1
                    $('#idBehandelVoorstel').show();
                    if (fr.leeftijd === 'l75') {
                        setBehandelKeuze(false, false, false, false, false, true);
                    } else if (fr.pred === 'xhoog') {
                        setBehandelKeuze(false, false, false, false, true, false); //TODO of is dit toch verwijzen?
                    } else {
                        (fr.fract === 'geenwervel') ? $('#geenbeh').prop("checked", true) : $('#geenbeh').prop("checked", false);
                        (fr.fract === 'geenwervel') ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                        if (fr.bmd === 'xl') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, false, true, false, false, false); // TODO klopt dit wel, tekst is hier onduidelijk over, Jernt gevraagd
                            }
                        } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(false, false, true, true, false, false);
                            }
                        } else if (fr.bmd === 'm1') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 1010: // risico groep 2
                    $('#idBehandelVoorstel').show();
                    if (fr.leeftijd === 'l75') {
                        setBehandelKeuze(false, false, false, false, false, true);
                    } else if (fr.pred === 'xhoog') {
                        setBehandelKeuze(false, false, false, false, true, false); //TODO of is dit toch verwijzen?
                    } else {
                        if (fr.bmd === 'xl') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                }
                            }
                        } else if (fr.bmd === 'l') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, true, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, true, false, false);
                                }
                            } else {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                }
                            }
                        } else if (fr.bmd === 'm2') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else if (fr.bmd === 'm1') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 1001: // risico groep 1
                    $('#idBehandelVoorstel').show();
                    (fr.fract === 'geenwervel') ? $('#geenbeh').prop("checked", true) : $('#geenbeh').prop("checked", false);
                    (fr.fract === 'geenwervel') ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    if (fr.bmd === 'xl') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else {
                            setBehandelKeuze(false, false, true, false, false, false); // TODO klopt dit wel, tekst is hier onduidelijk over, Jernt gevraagd
                        }
                    } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                        if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else if (fr.vfa === 'gr2') {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else if (fr.bmd === 'm1') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else {
                        setBehandelKeuze(true, false, false, false, false, false);
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 1000: // risico groep 0
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger');
                    // TODO 40 en 50 jaar zonder breuk of prednison
                    // maar wel een xlage bmd of wervel# gr2 of hoger
                    if ((fr.leeftijd === 'l40') && fr.groep0) {
                        if ((fr.bmd === 'xl') || (fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }                        
                    } else if ((fr.leeftijd === 'l50') && fr.groep0) {
                        if ((fr.bmd === 'xl') && (fr.vfa === 'gr2')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else if (((fr.bmd === 'm1') || (fr.bmd === 'm2') || (fr.bmd === 'l')) && (fr.vfa === 'gr2')) {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else if ((fr.bmd === 'm1') && ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3'))) {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else if (((fr.bmd === 'm2') || (fr.bmd === 'l') || (fr.bmd === 'xl')) && ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3'))) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }                        
                    } else {
                        setBehandelKeuze(true, false, false, false, false, false);
                    }                    
                    $('#divFUitkomst').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger');
                    break;
// standaard route
                case 111: // risico groep 3+2+1
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    if (fr.leeftijd === 'l75') {
                        setBehandelKeuze(false, false, false, false, false, true);
                    } else if (fr.pred === 'xhoog') {
                        setBehandelKeuze(false, false, false, false, true, false); //TODO of is dit toch verwijzen?
                    } else {
                        (fr.fract === 'geenwervel') ? $('#geenbeh').prop("checked", true) : $('#geenbeh').prop("checked", false);
                        (fr.fract === 'geenwervel') ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                        if (fr.bmd === 'xl') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, false, true, false, false, false); // TODO klopt dit wel, tekst is hier onduidelijk over, Jernt gevraagd
                            }
                        } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else if (fr.bmd === 'm1') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 110: // risico groep 3+2
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    if (fr.leeftijd === 'l75') {
                        setBehandelKeuze(false, false, false, false, false, true);
                    } else if (fr.pred === 'xhoog') {
                        setBehandelKeuze(false, false, false, false, true, false); //TODO of is dit toch verwijzen?
                    } else {
                        if (fr.bmd === 'xl') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                }
                            }
                        } else if (fr.bmd === 'l') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, true, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, true, false, false);
                                }
                            } else {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                }
                            }
                        } else if (fr.bmd === 'm2') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else if (fr.bmd === 'm1') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 101: // risico groep 3+1
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    (fr.fract === 'geenwervel') ? $('#geenbeh').prop("checked", true) : $('#geenbeh').prop("checked", false);
                    (fr.fract === 'geenwervel') ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    if (fr.bmd === 'xl') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else {
                            setBehandelKeuze(false, false, true, false, false, false); // TODO klopt dit wel, tekst is hier onduidelijk over, Jernt gevraagd
                        }
                    } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                        if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else if (fr.vfa === 'gr2') {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else if (fr.bmd === 'm1') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else {
                        setBehandelKeuze(true, false, false, false, false, false);
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 100: // risico groep 3
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-warning').removeClass('alert-success').removeClass('alert-info').removeClass('alert-danger');
                    // $('#geenbeh').prop("checked", false);
                    if (fr.bmd === 'xl') {
                        if (fr.leeftijd === 'l60') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, true, false, false, false, false);
                            }
                        } else {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, false, true, false, false, false);
                            }
                        }
                    } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                        if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else if (fr.vfa === 'gr2') {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else if (fr.bmd === 'm1') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else {
                        setBehandelKeuze(true, false, false, false, false, false);
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 11: // risico groep 2+1
                    $('#idBehandelVoorstel').show();
                    if (fr.leeftijd === 'l75') {
                        setBehandelKeuze(false, false, false, false, false, true);
                    } else if (fr.pred === 'xhoog') {
                        setBehandelKeuze(false, false, false, false, true, false); //TODO of is dit toch verwijzen?
                    } else {
                        (fr.fract === 'geenwervel') ? $('#geenbeh').prop("checked", true) : $('#geenbeh').prop("checked", false);
                        (fr.fract === 'geenwervel') ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                        if (fr.bmd === 'xl') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, false, true, false, false, false); // TODO klopt dit wel, tekst is hier onduidelijk over, Jernt gevraagd
                            }
                        } else if (fr.bmd === 'l') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                setBehandelKeuze(false, false, true, true, false, false);
                            }
                        } else if (fr.bmd === 'm2') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else if (fr.bmd === 'm1') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 10: // risico groep 2
                    $('#idBehandelVoorstel').show();
                    if (fr.leeftijd === 'l75') {
                        setBehandelKeuze(false, false, false, false, false, true);
                    } else if (fr.pred === 'xhoog') {
                        setBehandelKeuze(false, false, false, false, true, false); //TODO of is dit toch verwijzen?
                    } else {
                        if (fr.bmd === 'xl') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                }
                            }
                        } else if (fr.bmd === 'l') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, true, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, true, false, false);
                                }
                            } else {
                                if ((fr.leeftijd === 'l40') && (fr.pred === 'hoog')) {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                } else {
                                    setBehandelKeuze(false, false, true, false, false, false);
                                }
                            }
                        } else if (fr.bmd === 'm2') {
                            if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, false, false, false, true);
                            } else if (fr.vfa === 'gr2') {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else if (fr.bmd === 'm1') {
                            if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                                setBehandelKeuze(false, false, true, true, false, false);
                            } else {
                                setBehandelKeuze(true, false, false, false, false, false);
                            }
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 1: // risico groep 1
                    $('#idBehandelVoorstel').show();
                    (fr.fract === 'geenwervel') ? $('#geenbeh').prop("checked", true) : $('#geenbeh').prop("checked", false);
                    (fr.fract === 'geenwervel') ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    if (fr.bmd === 'xl') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else {
                            setBehandelKeuze(false, false, true, false, false, false); // TODO klopt dit wel, tekst is hier onduidelijk over, Jernt gevraagd
                        }
                    } else if ((fr.bmd === 'l') || (fr.bmd === 'm2')) {
                        if ((fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, false, false, false, true);
                        } else if (fr.vfa === 'gr2') {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(false, false, true, true, false, false);
                        }
                    } else if (fr.bmd === 'm1') {
                        if ((fr.vfa === 'gr2') || (fr.vfa === 'gr2x2') || (fr.vfa === 'gr3')) {
                            setBehandelKeuze(false, false, true, true, false, false);
                        } else {
                            setBehandelKeuze(true, false, false, false, false, false);
                        }
                    } else {
                        setBehandelKeuze(true, false, false, false, false, false);
                    }
                    $('#geenbeh').prop("checked") ? $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger') : $('#idBehandelVoorstel').addClass('alert-danger').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
                    break;
                case 0: // laag risico groep
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger');
                    setBehandelKeuze(true, false, false, false, false, false);
                    $('#divFUitkomst').addClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger');
                    break;
                default:
                    $('#idBehandelVoorstel').show();
                    $('#idBehandelVoorstel').addClass('alert-info').removeClass('alert-success').removeClass('alert-warning').removeClass('alert-danger');
                    setBehandelKeuze(true, false, false, false, false, false);
                    break;
            }
        });

        $('button[id=buttonReset]').on('click', function () {
            window.location.reload();
        });
        $('#google').on('click', function () {
            var str = "Download form Google Play Store";
            var URL = str.link("https://play.google.com/store/apps/details?id=info.doktershuis.android.fractuurrisico&hl=nl");
            document.getElementById('result').innerHTML = URL;
        });
        // $('#apple').on('click', function () {
        //     var str = "Download form Apple App Store";
        //     var URL = str.link("https://itunes.apple.com/nl/app/gout-diagnosis/id1114646056?mt=8");
        //     document.getElementById('result').innerHTML = URL;
        // });
    });
