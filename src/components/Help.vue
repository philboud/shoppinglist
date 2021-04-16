<template>
    <div class="construction">
        <h1>Mode d'emploi</h1>
        <ul>
            <li><h4>Liste par catégorie</h4>
                <p>Ce type de liste permet de choisir les produit en fonction des catégories</p>
            </li>
            <li><h4>Liste libre</h4>
                <p>Ecris ta liste de maniere libre en saisissant le produit et la quantité, la liste se créé au fur et à mesure</p>
            </li>
            <li><h4>Liste rapide</h4>
                <p>Ce type de liste permet de choisir les produits essentiels en cliquant directement dessus</p>
            </li>
            <li><h4>Voir la liste</h4>
                <p>Possibilité de voir la liste de la modifier ou de supprimer des produits</p>
            </li>
            <li><h4>Imprimer</h4>
                <p>Cette option créé la liste sous format PDF, ce qui permet de la télécharger ou de l 'imprimer</p>
            </li>
            <li><h4>Supprimer la liste</h4>
                <p>La liste en cours est totalement supprimée. Il n 'est pas necéssaire de supprimer une liste, on peut la reprendre et modifier les articles</p>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style>
    .construction{
        margin: 0 auto;
        width: 400px;
    }
</style>
