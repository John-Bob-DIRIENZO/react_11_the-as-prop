/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 *
 * Un peu d'explications ici,
 * les props qui sont passées à mon composant n'ont strictement rien de spécial.
 * On va juste les déconstruire puis, la props "saucisse" va, elle aussi, être
 * re-déconstruite pour être associée à un alias. La seule règle est qu'on veut
 * utiliser un alias commençant par une majuscule pour spécifier à React que c'est
 * un alias qui est utilisable comme nom de composant
 *
 * Plus ici : https://levelup.gitconnected.com/create-more-extensible-react-components-with-the-as-prop-pattern-b79bcbcf4024
 */

export default function Decorator(props) {
    const {saucisse: Francis, children} = props;

    return <Francis href={'coucou'}>{children}</Francis>
}

Decorator.defaultProps = {
    saucisse: "h5"
};
