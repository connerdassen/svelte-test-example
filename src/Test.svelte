<script>
    import { onMount } from "svelte"; // onMount will not be called 
    // import { onMount } from "svelte/internal"; // onMount will be called 

    onMount(() => console.log("onMount was called"))

</script>

<span>Hello world!</span>