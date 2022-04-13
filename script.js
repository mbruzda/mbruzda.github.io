
let app = Vue.createApp({
    
})
app.component('receipt', {
    template: `
        <div>
            <b>RECEIPT</b>
            <p>-----------------------</p>
            <p>Product: {{product}}</p>
            <p>Unit Price: {{price}} zł</p>
            <p>Quantity: {{quantity}}</p>
            <p>Amount: {{amount}} zł</p>
            <p>VAT Tax Rate: {{tax}} %</p>
            <p>==============</p>
            <b>Total: {{total}} zł</b>

        </div>
    `,
    data(){
        return{
            product: 'book',
            price: 17,
            quantity: 3,
            amount: 51,
            tax: 23,
            total: 0
        }
    },
    methods: {
        count(){
            this.total = parseFloat(this.amount)*parseFloat((parseFloat(this.tax) + 100)/100)
        }
    },
    beforeMount() {
        this.count()
    },
})
app.mount('#root')