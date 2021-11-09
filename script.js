window.addEventListener("load", function(){
    let btnMore= document.querySelector(".cargar-mas");
    const lastUpdate= document.getElementById("service");
    const footer= document.querySelector("footer");

    btnMore.addEventListener('click', ()=>{
        btnMore.classList.add("oculto");
        lastUpdate.innerHTML+=`<div class="cards">
        <div class="card">
            <img src="./img/capacitacion.jpg" alt="">
            <p>Capacitacion</p>
            <p class="descripcion"> Brindamos capacitaciones para que el empleado pueda obtener mayores conocimientos en el rubro, mejorar su conocimientos con herramientas de trabajo y asi mejorar desempeño laboral.</p>
        </div>
        <div class="card">
            <img src="./img/asistentesocial.jpg" alt="">
            <p>Asistencia social</p>
            <p class="descripcion"> Facilitamos el contacto con asistentes sociales y tambien con psicologos en los casos que sean necesarios.</p>
        </div>
        <div class="card">
            <img src="./img/internet.jpg" alt="">
            <p>Asesoramiento de recursos</p>
            <p class="descripcion"> Te asesoramos de la mejor forma para que tengas el mejor servicio de internet en tu zona y asi evitar problemas futuros.</p>
        </div>
        </div>
        </main>
        <footer>
            <div class="div-foot" id="contacto">
                <div class="contactillo">
                    <p>Contacto</p>
                    <a href="#">infoundefined@enterprise.com</a>
                    <p>Av. Siempre Viva 742</p>
                    <p>0800-808</p>
                </div>
                <ul class="botones-foot">
                    <li><a href="#"><i class="fab fa-instagram icon"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitch icon"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube icon"></i></a></li>
                </ul>
            </div>
            <p>© Created by team Undefined</p>
        </footer>`;
    });
});

            