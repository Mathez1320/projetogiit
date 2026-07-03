class Product:
    def __init__(self, nome, price):
        self._nome = nome
        self._price = price 

    def adicionar_item_lista(self):
        lista_nomes_produtos = []
        lista_precos_produtos = []
        for item in range(3):
            self._nome = str(input("Digite um nome para o produto: "))            
            lista_nomes_produtos.append(self._nome)
            
            self._price = float(input("Digite um preço para o produto: "))
            lista_precos_produtos.append(self._price)

        print("********* LISTA DE PRODUTOS *********")
        for produto in lista_nomes_produtos: 
            for preco in lista_precos_produtos:
                print(f" Nome do produto: {produto} Preço do produto: {preco}")
                 
    def get_nome(self):
        return self._nome
    
    def get_price(self):
        return self._price

    def set_price(self, new_price):
        self._price = float(new_price)


print("*************** SISTEMA DE CADASTRO DE PRODUTOS ***************")

def validar_funcoes (status_code):  
        nome = str(input("Informe o nome produto: "))
        preco = float(input("Informe o preço produto: "))
        produto = Product(nome, preco)
        match status_code:
            case 1:
                produto.adicionar_item_lista()
           
validar_funcoes(1)


