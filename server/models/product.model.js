const mongoose = require("mongoose");

// Common schema for all products
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Product Name
  category: { type: String, required: true }, // E.g., Smartphone, Laptop, etc.
  ratings: { type: String }, // E.g., "(475)"
  stars: { type: String }, // E.g., "4"
  new_price: { type: String }, // E.g., "18,499.00"
  old_price: { type: String }, // E.g., "21,999.00"
  discounts: { type: String }, // E.g., "16%(₹3,500)"
  bank_offers: { type: String }, // E.g., Bank offers
  images: { type: String }, // Main product image URL
});

// Modular specifications schema
const SpecificationsSchema = new mongoose.Schema({
  general_information: {
    colour: { type: String },
    series: { type: String },
    model: { type: String },
    brand: { type: String },
  },
  hardware_storage: {
    internal_storage: { type: String },
    processor: { type: String },
    storage_type: { type: String },
  },
  os: {
    operating_system: { type: String },
    os_version: { type: String },
  },
  network_connectivity: {
    sim_type: { type: String },
    connectivity: { type: String },
    usb: { type: String },
    wifi: { type: String },
    bluetooth: { type: String },
  },
  battery: {
    capacity: { type: String },
    quick_charge: { type: String },
  },
  display_camera: {
    screen_resolution: { type: String },
    screen_size: { type: String },
    rear_camera: { type: String },
    selfie_camera: { type: String },
  },
  sensors: [{ type: String }],
  formats_supported: {
    audio_formats: [{ type: String }],
    video_formats: [{ type: String }],
  },
  additional_features: mongoose.Schema.Types.Mixed, // Flexible object for additional fields
  in_the_box: [{ type: String }], // E.g., items included in the box
});

// Manufacturing and packaging information schema
const ManufacturingSchema = new mongoose.Schema({
  customer_care: {
    address: { type: String },
    phone: { type: String },
    email: { type: String },
  },
  country_of_origin: { type: String },
  manufacturer: { type: String },
  packer: { type: String },
  importer: { type: String },
  dimensions: {
    width: { type: String },
    height: { type: String },
    length: { type: String },
  },
  net_weight: { type: String },
  marketed_by: { type: String },
});

// Parent schema to combine all sections
const ComprehensiveProductSchema = new mongoose.Schema({
  product: ProductSchema,
  specifications: SpecificationsSchema,
  manufacturing: ManufacturingSchema,
  warranty: { type: String }, // Warranty details
});

const ComprehensiveProduct = mongoose.model("ComprehensiveProduct", ComprehensiveProductSchema);

module.exports = ComprehensiveProduct;
