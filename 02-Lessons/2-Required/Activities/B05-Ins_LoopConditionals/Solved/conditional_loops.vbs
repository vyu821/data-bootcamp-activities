Sub conditional_loops()

    ' Create a for loop from 1 to 10
    For i = 1 To 10

        ' Check if the value is "high" (above 7)
        If Cells(i, 1).Value > 7 Then

            ' Enter "High Value" in the adjacent cell
            Cells(i, 2).Value = "High Value"
            
        ' Check if the value is medium (above 3)
        ElseIf Cells(i, 1). Value > 3 Then

            ' Enter "Medium Value" in the adjacent cell
            Cells(i, 2).Value = "Medium Value"

        ' If the number is not high or medium, it must be low
        Else

            ' Enter "Low Value" in the adjacent cell
            Cells(i, 2).Value = "Low Value"
            
        ' Close the If/Else Statement
        End If

    Next i

End Sub