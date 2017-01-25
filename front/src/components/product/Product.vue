<template>
	<div class="col-md-4">
		<div class="thumbnail">
			<img src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png" >
			<div class="caption">
				<h3> {{ product.name }} </h3>
				<p> {{ product.price }} </p>
				
				<hr>

				<p>
					<a href="#" class="btn btn-default">
						Wish list
					</a>
					<a href="#" class="btn btn-success">
						Buy
					</a>
				</p>	
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['product']
	}	
</script>

<style>
	
</style>