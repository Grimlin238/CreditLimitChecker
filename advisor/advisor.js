class advisor

{
	
	constructor(balance, limit)
	
	{
		
		this.balance = balance
		
		this.limit = limit
		
	}
	
	minimumLimit()
	
	{
		
		var min = this.limit * 0.3
		
		return min
		
	}
	
	spendingTooMuch()
	
	{
		
		var tooMuch = true
		
		var calc = this.balance / this.limit
		
		if (calc > 0.3)
			
		{
			
			tooMuch = true
			
		}
		
		else
			
		{
			
			tooMuch = false
			
		}
		
		return tooMuch 
		
	}
	
}

module.exports = advisor