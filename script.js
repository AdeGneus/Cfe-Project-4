let customer = document.getElementById('firstName')
        let age = document.getElementById('age')
        let select = document.getElementById('mask')
        
        total = 0
        allowed = 0
        denied = 0

        const checkUser = () => { 
            if (customer.value === '') {
                alert('Kindly enter your first name')
            } else if (age.value === '') {
                alert('Kindly enter your age')
            } else if (age.value < 12) {
                alert('You must be 12 years or older to gain entry into Lux mall')
                total++
                document.getElementById('totalVisit').innerHTML =  `Total Visitors: ${total}` 
            } else if (select.value != 'Yes') {
                alert('You have been denied entry into Lux mall') 
                total++
                document.getElementById('totalVisit').innerHTML =  `Total Visitors: ${total}`       
            } else {
                alert(`Dear ${customer.value}, Welcome to Lux mall`)
                allowed++
                document.getElementById('allowedVisitor').innerHTML = `Allowed Visitors: ${allowed}`
                
                total++
                document.getElementById('totalVisit').innerHTML =  `Total Visitors: ${total}`
                
                customer.value = ''      
                age.value = '' 
                select.value = 'No'     
            }

            if ((customer.value !== '' && age.value !== "") && (age.value < 12 || select.value !== 'Yes')) {
                denied++
                document.getElementById('deniedVisitor').innerHTML = `Denied Visitors: ${denied}`
                
                customer.value = ''      
                age.value = ''
                select.value = 'No'
            }
        }