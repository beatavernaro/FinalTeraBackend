using System; 
class Program { public static void Main(string[] args) { 

var fat10 = Fatorial(10);
  Console.WriteLine(fat10);
} 

public static int Fatorial(int num){
  int resultado = 1;
  for(int i = num; i >= 1; i--){
    resultado *= i;
  }
  return (resultado);
}
               
 }