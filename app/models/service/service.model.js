module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            type: String,
            description: String,
            tiers: { type: Array, price: String, period: String, descriptionList: [String] }
        },
        { timestamps: true }
    );
    schema.method("toJSON", function () {
        // eslint-disable-next-line
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Service = mongoose.model("service", schema);
    return Service;
};
