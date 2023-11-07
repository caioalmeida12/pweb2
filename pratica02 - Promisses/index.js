let promiseCount = 0;
function minhaPromessa() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Função iniciada (<small>código síncrono iniciado</small>)<br/>');
    
    let p1 = new Promise(
        function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promessa iniciada (<small>código assíncrono iniciado</small>)<br/>');
            window.setTimeout(
                function() {
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    p1.then(
        function(val) {
            log.insertAdjacentHTML('beforeend', val + ') Promessa cumprida (<small>código assíncrono finalizado</small>)<br/>');
        }
    )

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Função finalizada (<small>código síncrono finalizado</small>)<br/>');
}

document.getElementById('btn').addEventListener('click', minhaPromessa);