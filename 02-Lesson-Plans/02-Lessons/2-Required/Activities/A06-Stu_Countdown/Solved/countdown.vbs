Sub reverse()

Dim myArray(5) As String

' Store the values of the cells A1 to A5 in myArray
myArray(0) = Range("A1").Value
myArray(1) = Range("A2").Value
myArray(2) = Range("A3").Value
myArray(3) = Range("A4").Value
myArray(4) = Range("A5").Value

' Replace the values of the cells A1 to A5 with the values of myArray in reverse order
Range("A1") = myArray(4)
Range("A2") = myArray(3)
Range("A3") = myArray(2)
Range("A4") = myArray(1)
Range("A5") = myArray(0)

End Sub
