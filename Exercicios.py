# 1. Positivo ou Negativo
print("--- Exercício 1 ---")
num1 = int(input("Digite um número inteiro: "))
if num1 >= 0:
    print("Resultado: Positivo")
else:
    print("Resultado: Negativo")
print("\n" + "-"*20)

# 2. Dobro do valor
print("--- Exercício 2 ---")
valor2 = int(input("Digite um número: "))
print("O dobro é:", valor2 * 2)
print("\n" + "-"*20)

# 3. Mostrar valor e Tipo
print("--- Exercício 3 ---")
valor3 = input("Digite algo: ")
print("Você digitou:", valor3)
print("O tipo da variável é:", type(valor3))
print("\n" + "-"*20)

# 4. Par ou Ímpar
print("--- Exercício 4 ---")
num4 = int(input("Digite um número: "))
if num4 % 2 == 0:
    print("Resultado: Par")
else:
    print("Resultado: Ímpar")
print("\n" + "-"*20)

# 5. Converter texto e mostrar o triplo
print("--- Exercício 5 ---")
texto5 = input("Digite um número (como texto): ")
num5 = int(texto5)
print("O triplo de", num5, "é:", num5 * 3)
print("\n" + "-"*20)

# 6. Qual é o maior
print("--- Exercício 6 ---")
n6_1 = float(input("Digite o primeiro número: "))
n6_2 = float(input("Digite o segundo número: "))
if n6_1 > n6_2:
    print("O maior é:", n6_1)
else:
    print("O maior é:", n6_2)
print("\n" + "-"*20)

# 7. Maior que 10
print("--- Exercício 7 ---")
valor7 = float(input("Digite um valor: "))
if valor7 > 10:
    print("Maior que 10")
else:
    print("Menor ou igual a 10")
print("\n" + "-"*20)

# 8. Raiz quadrada aproximada
print("--- Exercício 8 ---")
num8 = float(input("Digite um número positivo: "))
if num8 >= 0:
    raiz = num8 ** 0.5
    print(f"A raiz aproximada é: {raiz:.2f}")
else:
    print("Número inválido")
print("\n" + "-"*20)

# 9. Metade do valor (Float)
print("--- Exercício 9 ---")
valor9 = float(input("Digite um número: "))
print("A metade é:", valor9 / 2)
print("\n" + "-"*20)

# 10. Intervalo entre 0 e 10
print("--- Exercício 10 ---")
num10 = float(input("Digite um número: "))
if 0 <= num10 <= 10:
    print("Dentro do intervalo")
else:
    print("Fora do intervalo")

