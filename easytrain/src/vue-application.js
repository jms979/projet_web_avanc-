const Home = window.httpVueLoader('./pages/HomePage.vue')
const NavBar = window.httpVueLoader('./components/NavBar.vue')
const LogIn = window.httpVueLoader('./pages/LogIn.vue')
const SignUp = window.httpVueLoader('./pages/SignUp.vue')
const AboutUs = window.httpVueLoader('./pages/AboutUs.vue')
const Resultat = window.httpVueLoader('./pages/Resultat.vue')
const Panier = window.httpVueLoader('./pages/Panier.vue')
const Reservation = window.httpVueLoader('./components/Reservation.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: LogIn },
    { path: '/signup', component: SignUp },
    { path: '/aboutus', component: AboutUs },
    { path: '/resultat', component: Resultat },
    { path: '/panier', component: Panier },
]

const router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    el: '#app',
    data: {
        connected: false,
        resultat:[],
        billets: [],
    },
    async mounted() {},
    methods: {
        async addUser(newUser) {
            if (await axios.post('/api/register/', newUser)
                .catch(function(error) {
                    if (error.response.status === 400) {
                        document.getElementById('errorSignUpMessage').innerHTML = "Le pseudo est déjà pris.";
                    } else if (error.response.status === 401) {
                        document.getElementById('errorSignUpMessage').innerHTML = "L'adresse email est déjà prise.";
                    }
                })) {
                this.connected = true;
                router.push('/')
            }
        },
        async logIn(user) {
            const userTeam = await axios.post('/api/login/', user)
                .catch(function(error) {
                    if (error.response.status === 400 || error.response.status === 401) {
                        document.getElementById('errorLogInMessage').innerHTML = "La combinaison est incorrecte.";
                        return error.response;
                    }
                })
            if (userTeam.status === 200) {
                this.team = userTeam.data;
                this.connected = true;
                router.push('/')
            }
        },
        async logOut() {
            if (await axios.post('/api/logout/')
                .catch(function(error) {
                    if (error.response.status === 400 || error.response.status === 401) {
                        console.log(error)
                    }
                })) {
                this.connected = false;
                router.push('/')
            }
        },
        async research(donnees){
            const res = await axios.post('/api/research/', donnees)
            this.resultat = res.data.list_jour
            router.push('/resultat')

        },
        async acheter(achat){
            let quantity = "quantite"
            achat[quantity]= 1
            const res = await axios.post('/api/pay/', achat)
            this.billets.push(res.data.re)
            router.push('/panier')
        }
    }
})