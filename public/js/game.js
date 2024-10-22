var modalSetting = $('#modalSetting').hide()

$(document).ready(function () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    var theme = urlParams.get('theme')
    var username = urlParams.get('username')
    var gameTheme = $('#gameTheme')

    var path = [{
        1: {
            header: {
                theme: 'Placas',
                extensionFile: 'svg'
            }, body: {
                1 : '../public/images/game/placas/p1.svg',
                2 : '../public/images/game/placas/p2.svg',
                3 : '../public/images/game/placas/p3.svg',
                4 : '../public/images/game/placas/p4.svg',
                5 : '../public/images/game/placas/p5.svg',
                6 : '../public/images/game/placas/p6.svg',
                7 : '../public/images/game/placas/p7.svg',
                8 : '../public/images/game/placas/p8.svg',
                9 : '../public/images/game/placas/p9.svg'
            }
        },
        2: {
            header: {
                theme: 'veiculos',
                extensionFile: 'null'
            }, body: {
                1: 'null'
            }
        },
        3: {
            header: {
                theme: 'manuti',
                extensionFile: 'null'
            }, body: {
                1: 'null',
            }
        },
        4: {
            header: {
                theme: 'Líderes',
                extensionFile: 'jpg'
            }, body: {
                1: '../public/images/game/gerencia/l1.jpg',
                2: '../public/images/game/gerencia/l2.jpg',
                3: '../public/images/game/gerencia/l3.jpg',
                4: '../public/images/game/gerencia/l4.jpg',
                5: '../public/images/game/gerencia/l5.jpg',
                6: '../public/images/game/gerencia/l6.jpg',
                7: '../public/images/game/gerencia/l7.jpg',
                8: '../public/images/game/gerencia/l8.jpg',
                9: '../public/images/game/gerencia/l9.jpg',
                10: '../public/images/game/gerencia/l10.jpg',
                11: '../public/images/game/gerencia/l11.jpg',
                12: '../public/images/game/gerencia/l12.jpg',
                13: '../public/images/game/gerencia/l13.jpg',
                14: '../public/images/game/gerencia/l14.jpg'
            }
        }
    }]

    var modalFinished = $('#modalFinished').hide()
    var textCountDown = $('#textCountDown').hide()

    var buttonExit = $('#buttonExit')
    var buttonSetting = $('#buttonSetting')
    var buttonSound = $('#buttonSound')
    var iconSound = $('.iconSound')

    var inputRangeVolume = $('#inputRangeVolume')

    var audioFinished = new Audio('../public/sounds/finished.mp3')
    var success = new Audio('../public/sounds/success.mp3')
    var error = new Audio('../public/sounds/error.mp3')
    var countdownSound = new Audio('../public/sounds/contagem.mp3')
    var music = new Audio('../public/sounds/ambientMusicGame.mp3')
    var magic = new Audio('../public/sounds/magic.mp3')

    var volumeDefault = inputRangeVolume.val() / 4
    var volume
    var muted = false

    var buttonStart = $('#buttonStart')
    var textStarted = $('#textStarted')

    let timer;
    let seconds = 0;
    let minutes = 0;
    let isPaused = false;

    music.volume = volumeDefault
    magic.volume = volumeDefault

    switch (theme) {
        case 'p':
            printCard('Placas')
            break;

        case 'v':
            printCard('Veículo')
            break;

        case 't':
            printCard('Projetos Menutenção & Tecnologia')
            break;

        case 'l':
            printCard('Líderes')
            break;

        default:
            printCard('Error')
            break;

    }

    inputRangeVolume.on('change', function () {
        volume = $(this).val() / 4

        music.volume = volume
        magic.volume = volume
    })

    buttonSetting.on('click', () => {
        modalSetting.show()
        pauseTimer()
    })

    buttonExit.on('click', () => {
        modalSetting.hide()
        resumeTimer()
    })

    buttonSound.on('click', () => {
        var setVolume

        if (!muted) {
            $(iconSound[0]).addClass('soundMuted')
            $(iconSound[1]).removeClass('soundMuted')

            setVolume = 0
            muted = true
        } else {
            $(iconSound[0]).removeClass('soundMuted')
            $(iconSound[1]).addClass('soundMuted')

            setVolume = volume
            muted = false
        }

        music.volume = setVolume
        magic.volume = setVolume

    })

    var cards = $('.card');

    cards.each(function () {
        $(this).on('click', function () {
            if ($(this).hasClass('flip') || $(this).hasClass('turned')) return;

            var flippedCards = $('.card.flip');

            if (flippedCards.length == 2) {
                return;
            }

            $(this).addClass('flip');

            flippedCards = $('.card.flip');

            if (flippedCards.length == 2) {
                var card1 = $(flippedCards[0]);
                var card2 = $(flippedCards[1]);

                if (card1.attr('data-card') === card2.attr('data-card')) {
                    card1.addClass('turned');
                    card2.addClass('turned');
                    success.play()
                } else {
                    error.play()
                }

                var turnedCards = $('.turned');

                if (turnedCards.length >= 12) {
                    modalFinished.show()

                    var pointTime = $('#timer').text()
                    var pointClick = $('#scoreClick').text()

                    $('#pointTimePlacar').text(pointTime)
                    $('#pointClickPlacar').text(pointClick)

                    const points = `{name: ${username}, theme: ${theme}, clicks: ${pointClick} , time: ${pointTime}}`;

                    $('#globalVariable').val(points)

                    confetti()

                    audioFinished.play()

                    setInterval(function () {
                        magic.volume = .5
                        magic.play()
                    }, 1000)

                    music.pause()
                }

                setTimeout(function () {
                    flippedCards.removeClass('flip');
                }, 800);
            }


        });
    });

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function printCard(type) {
        var contentMain = $('#contentMain');
        contentMain.empty();

        gameTheme.text(type);

        for (let themes of path) {
            for (let i in themes) {
                if (themes[i].header.theme === type) {
                    var body = themes[i].body;

                    let imgUrls = [];
                    for (let key in body) {
                        let imgUrl = body[key];
                        if (imgUrl !== 'null') {
                            imgUrls.push(imgUrl);
                        }
                    }

                    let selectedImages = shuffle(imgUrls).slice(0, 6);

                    let cardPairs = [];
                    selectedImages.forEach((imgUrl, index) => {
                        cardPairs.push({ imgUrl: imgUrl, dataCard: index + 1 });
                        cardPairs.push({ imgUrl: imgUrl, dataCard: index + 1 });
                    });

                    cardPairs = shuffle(cardPairs);

                    cardPairs.forEach(card => {
                        var imgElement = `<div class='card' data-card='${card.dataCard}'> 
                                            <div class='card-inner'>
                                                <div class='card-front'></div>
                                                <div class='card-back'>
                                                <img src='${card.imgUrl}'>
                                                </div>
                                            </div>
                                            </div>`;

                        contentMain.append(imgElement);
                    });

                    return;
                }
            }
        }
    }

    function startTimer() {
        if (!isPaused) {
            seconds = 0;
            minutes = 0;
        }

        var scoreboardSeconds = $('#scoreboardSeconds');
        var scoreboardMinutes = $('#scoreboardMinutes');

        const formatTime = (time) => time < 10 ? `0${time}` : time;

        timer = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            scoreboardMinutes.text(formatTime(minutes));
            scoreboardSeconds.text(formatTime(seconds));
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timer);
        isPaused = true;
        music.pause()
    }

    function resumeTimer() {
        if (isPaused) {
            startTimer();
            isPaused = false;
        }
        music.play()
    }

    buttonStart.on('click', function () {
        $(this).hide();
        textStarted.hide();
        textCountDown.show();
        var countdownBox = $('#countdown');

        var ct = 3;
        textCountDown.text(ct);
        countdownSound.play();

        var timerStarted = false;

        var countdown = setInterval(function () {
            ct--;

            if (ct == 1) {
                countdownBox.addClass('fadeinBackground');
            }

            if (ct > 0) {
                textCountDown.text(ct);
            } else {
                clearInterval(countdown);
                textCountDown.text('SIGA!');
                setTimeout(function () { countdownBox.hide(); }, 1500);

                music.play()

                if (!timerStarted) {
                    startTimer();
                    timerStarted = true;
                }
            }

        }, 1100);

        var amountClicks = 0;
        var scoreClick = $('#scoreClick');

        cards.on('click', function () {
            amountClicks++;
            scoreClick.text(amountClicks);
        });
    });
})



function confetti() {
    // Globals
    var random = Math.random
        , cos = Math.cos
        , sin = Math.sin
        , PI = Math.PI
        , PI2 = PI * 2
        , timer = undefined
        , frame = undefined
        , confetti = [];

    var particles = 1
        , spread = 80
        , sizeMin = 3
        , sizeMax = 24 - sizeMin
        , eccentricity = 10
        , deviation = 100
        , dxThetaMin = -.1
        , dxThetaMax = -dxThetaMin - dxThetaMin
        , dyMin = .10
        , dyMax = .18
        , dThetaMin = 1
        , dThetaMax = .7 - dThetaMin;

    var colorThemes = [
        function () {
            return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
        }, function () {
            var black = 200 * random() | 0; return color(42, 81, 160);
        }, function () {
            var black = 200 * random() | 0; return color(12, 177, 171);
        }, function () {
            var black = 200 * random() | 0; return color(219, 221, 60);
        }, function () {
            return color(42, 81, 160);
        }, function () {
            return color(219, 221, 60);
        }, function () {
            var black = 256 * random() | 0; return color(black, black, black);
        }, function () {
            return colorThemes[random() < .5 ? 1 : 2]();
        }, function () {
            return colorThemes[random() < .5 ? 3 : 5]();
        }, function () {
            return colorThemes[random() < .5 ? 2 : 4]();
        }
    ];

    function color(r, g, b) {
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    // Cosine interpolation
    function interpolation(a, b, t) {
        return (1 - cos(PI * t)) / 2 * (b - a) + a;
    }

    // Create a 1D Maximal Poisson Disc over [0, 1]
    var radius = 1 / eccentricity, radius2 = radius + radius;
    function createPoisson() {
        // domain is the set of points which are still available to pick from
        // D = union{ [d_i, d_i+1] | i is even }
        var domain = [radius, 1 - radius], measure = 1 - radius2, spline = [0, 1];
        while (measure) {
            var dart = measure * random(), i, l, interval, a, b, c, d;

            // Find where dart lies
            for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
                a = domain[i], b = domain[i + 1], interval = b - a;
                if (dart < measure + interval) {
                    spline.push(dart += a - measure);
                    break;
                }
                measure += interval;
            }
            c = dart - radius, d = dart + radius;

            // Update the domain
            for (i = domain.length - 1; i > 0; i -= 2) {
                l = i - 1, a = domain[l], b = domain[i];
                // c---d          c---d  Do nothing
                //   c-----d  c-----d    Move interior
                //   c--------------d    Delete interval
                //         c--d          Split interval
                //       a------b
                if (a >= c && a < d)
                    if (b > d) domain[l] = d; // Move interior (Left case)
                    else domain.splice(l, 2); // Delete interval
                else if (a < c && b > c)
                    if (b <= d) domain[i] = c; // Move interior (Right case)
                    else domain.splice(i, 0, c, d); // Split interval
            }

            // Re-measure the domain
            for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
                measure += domain[i + 1] - domain[i];
        }

        return spline.sort();
    }

    // Create the overarching container
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '0';
    container.style.overflow = 'visible';
    container.style.zIndex = '9999';

    // Confetto constructor
    function Confetto(theme) {
        this.frame = 0;
        this.outer = document.createElement('div');
        this.inner = document.createElement('div');
        this.outer.appendChild(this.inner);

        var outerStyle = this.outer.style, innerStyle = this.inner.style;
        outerStyle.position = 'absolute';
        outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
        outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
        innerStyle.width = '100%';
        innerStyle.height = '100%';
        innerStyle.backgroundColor = theme();

        outerStyle.perspective = '50px';
        outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
        this.axis = 'rotate3D(' +
            cos(360 * random()) + ',' +
            cos(360 * random()) + ',0,';
        this.theta = 360 * random();
        this.dTheta = dThetaMin + dThetaMax * random();
        innerStyle.transform = this.axis + this.theta + 'deg)';

        this.x = window.innerWidth * random();
        this.y = -deviation;
        this.dx = sin(dxThetaMin + dxThetaMax * random());
        this.dy = dyMin + dyMax * random();
        outerStyle.left = this.x + 'px';
        outerStyle.top = this.y + 'px';

        // Create the periodic spline
        this.splineX = createPoisson();
        this.splineY = [];
        for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
            this.splineY[i] = deviation * random();
        this.splineY[0] = this.splineY[l] = deviation * random();

        this.update = function (height, delta) {
            this.frame += delta;
            this.x += this.dx * delta;
            this.y += this.dy * delta;
            this.theta += this.dTheta * delta;

            // Compute spline and convert to polar
            var phi = this.frame % 7777 / 7777, i = 0, j = 1;
            while (phi >= this.splineX[j]) i = j++;
            var rho = interpolation(
                this.splineY[i],
                this.splineY[j],
                (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
            );
            phi *= PI2;

            outerStyle.left = this.x + rho * cos(phi) + 'px';
            outerStyle.top = this.y + rho * sin(phi) + 'px';
            innerStyle.transform = this.axis + this.theta + 'deg)';
            return this.y > height + deviation;
        };
    }

    function poof() {
        if (!frame) {
            // Append the container
            document.body.appendChild(container);

            // Add confetti
            var theme = colorThemes[0]
                , count = 0;
            (function addConfetto() {
                var confetto = new Confetto(theme);
                confetti.push(confetto);
                container.appendChild(confetto.outer);
                timer = setTimeout(addConfetto, spread);
            })(0);

            // Start the loop
            var prev = undefined;
            requestAnimationFrame(function loop(timestamp) {
                var delta = prev ? timestamp - prev : 0;
                prev = timestamp;
                var height = window.innerHeight;

                for (var i = confetti.length - 1; i >= 0; --i) {
                    if (confetti[i].update(height, delta)) {
                        container.removeChild(confetti[i].outer);
                        confetti.splice(i, 1);
                    }
                }

                if (timer || confetti.length)
                    return frame = requestAnimationFrame(loop);

                // Cleanup
                document.body.removeChild(container);
                frame = undefined;
            });
        }
    }

    poof();
};