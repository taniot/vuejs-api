const { createApp } = Vue;

createApp({
    data() {
        return {
            message: '',
            responseContainer: null
        }
    },
    methods: {

    },
    beforeCreate() {
        console.log('beforeCreate');
        console.log(this.message);
    },
    created() {
        console.log('created');
        console.log(this.message);
    },
    beforeMount() {
        console.log('beforeMount');
        // console.log(this.message);

        //fare cose

        axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) => {
                // handle success
                // console.log(response.data);
                // console.log(this);
                this.message = response.data.response;

            });

        console.log('sono dopo axios');


    }
}).mount('#app');



//
