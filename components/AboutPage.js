function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">About Us</h2>
      <div className="max-w-3xl mx-auto">
        <p className="mb-4 text-gray-700">
          Founded in 2020, Brew Haven is a specialty coffee shop dedicated to serving 
          the highest quality coffee in a warm and inviting atmosphere.
        </p>
        <p className="mb-4 text-gray-700">
          We source our beans from ethical and sustainable farms around the world, 
          and our skilled baristas are passionate about the art and science of coffee.
        </p>
        <p className="mb-4 text-gray-700">
          Our mission is to create a haven where coffee lovers can enjoy exceptional 
          drinks, delicious food, and a space that feels like a second home.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;