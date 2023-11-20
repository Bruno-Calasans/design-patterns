

# Component (interface)
class ProductComponent:

    def getPrice(self):
        pass

    def isCompose():
        return False

# Leaf (no child)
class SingleProduct(ProductComponent):

    def __init__(self, name: str, price: float):
        super().__init__()
        self.name = name
        self.price = price

    def getPrice(self):
        return self.price
    
    def getName(self):
        return self.price
    

# Compose (has child)
class CompoundProduct(ProductComponent):

    def __init__(self, products: list[ProductComponent] = []):
        super().__init__()
        self.products = products

    def add(self, product: ProductComponent):
        self.products.insert(product)

    def remove(self, index: int):
        if index < len(self.products - 1): return None
        return self.products.pop(index)

    def getProduct(self, index: int):
        if index < len(self.products - 1): return None
        return self.products[index]
    
    def getPrice(self):
        price = 0
        for product in self.products:
            price += product.getPrice()
        return price
    
    def isCompose():
        return True
    
# comprando vários produtos (pega o drip do pai)
shirt = SingleProduct('T-shirt', 50)
shoes = SingleProduct('Nike Air', 200)
jeans = SingleProduct('Jeans 35', 100)

# empacotando os produtos (preciso guardar em algum lugar)
clothesBox = CompoundProduct([shirt, shoes, jeans])
print(clothesBox.getPrice())

# comprando mais produtos (eu sou riica!)
motherboard = SingleProduct('B550 AM4', 600)
cpu = SingleProduct('Ryzen 5 5600G', 800)
ram = SingleProduct('Fury 8GB 32000Mhz', 130)

# empacotando mais produtos (preciso guardar mais produtos - que bagunça, vei)
hardwareBox = CompoundProduct([motherboard, cpu, ram, ram])
print(hardwareBox.getPrice())

# criando uma caixa para guardar todas essas caixas
box = CompoundProduct([clothesBox, hardwareBox])
print(box.getPrice())

