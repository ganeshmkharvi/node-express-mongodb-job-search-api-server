module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            serviceVariant: String,
            billingAddress: {firstName: String, lastName: String, email:String, country: String, state: String, zip: String},
            payment: {mode: String, name: String, number:String, expiration: String, cvv: String}
        },
        { timestamps: true }
    );
    schema.method("toJSON", function () {
        // eslint-disable-next-line
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Checkout = mongoose.model("checkout", schema);
    return Checkout;
};
