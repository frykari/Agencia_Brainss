//     ********************  teoria  ********************************
//
//       ************* padding and margin **************************
//              - el valor % se aplica al ancho(width)
//              - este atributo solo aplica a elementos que ocupen todo el ancho(comportamiento block).
//              - para alinear verticalmente:con padding o display:flex; align-items:center; etc... 
//              - DIFERENCIAS: padding___utilizando border-box como valor, entonces sera lo que aumente el tamaño de la caja de contenido(box-content)              
//                                       su forma de utilizaar depende cuando convenga agrandar el tamaño de la caja o mantenerla pequeño por una cuestion de espacios al modificarse el tamaño de la pantalla.
//                             margin___(border-box) es el espacio de una caja a otra caja, si ambos tienen margin,podrian sobreponerse.
//                                       su uso es para asegurar la distancia hacia una caja, ante cualquier modificación de la pantalla
//
//  
//       ***************text-align******************************                                                      
//              - esta propiedad solo afecta a los elementos que contien text de posicionamiento por defect(fixes),relative(img); a los elementos que esten en el flujo normal.
//                a uno de comportamiento block no afectaria...
//              - esta propiedad afecta al contenido de un bloque no al mimo, es heredable
//              - no solo afecta texto sino todo el contenido que tiene el bloque al que se aplica.(se usa para alinear el contenido de un bloqoue; pero que este no se un block) 
//
//
//       ************display: flex********************
//              - la forma en como se proporciona el espacio del eje principal depende de la dimencion lineal de todo el contenido
//              - si es 1 item tomara el 100%
//              - si es igual o mas de 2 entonces se proporciona de acuerdo a las dimenciones de este.
//              - que se proporcione todo el width o solo parte, dependera de la dimencion de los item( aveces solo basta con proporcionar parte del width)
//              - usaras flex-shrink o flex-grow, para acomodar a tu gusto
//
//       ************flex-shrink y flex-grow********************
//              - esta propiedad no funciona si le das las dimenciones al contenedor
//
//       ************flex-basis********************
//              - esta propiedad es las dimenciones de los item antes de distribuirse
//              - NOTA: los item se distribuyen  segun el contenido de este, si es texto depende de lacantidad de texto(height), se nota en flex:row(defecto)
//         
//         
//       ************max-width,min-width********************
//              - no existe el valor "auto" para este; es mejor max-width:none;  
//         
//
//           NOTA*******  nunca se deve anidar enlacers, link's
//
//
//       **********CENTRAR TEXTO O CENTENEDOR DE TEXTO*************
//              - contendor de texto(p,a,div,etc...): se puede centrar de varias formas- la mas facil es display: flex; justify-content(eje principal):center; align-item(eje tranversal): center; 
//                                                    Nota: alinear un contenedor de dimenciones cuadraticas, es facil usando % y traslation.
//              - texto(el contenido de los contenedores): creo que solo hay una manera;  text-align:center; padding:(calculando)px;     
//
//      ********** selectores ***********
//         <... class="btn-primary-lg">
//         <... class="btn-primary-sm">
//
//         [class*='btn-'] { }
//       *comunes*   
//          [class*='-primary'] {...}
//          [class*='-secundary'] {...}
//          [class*='-lg'] {...}
//          [class*='-sm'] {...}
//
//         para class: con una ristra de selectores(en el archivo copiado)
//         [class*="-xs"] { }    -xs estaba en el intermedio de la cadena
//         [class|="col"] {}     col estaba al principio de la cadena
//          
//         para class: cuando queremos decir que termina extactamente en la cadena de texto indicado entre comillas
//         [class$='-offset-1'] {...}
// 
//
//         ************ METODOLOGIA BEM ******************
//
//           
//           ***block***
//           -Un componente de página funcionalmente independiente que se puede reutilizar
//           -El nombre del bloque describe su propósito  no su estado
//           -Tampoco debe usar etiquetas CSS 
//           -Crea un bloque:
//            Si una sección de código puede reutilizarse y no depende de la implementación de otros componentes de la página.
//              block-name
//              logo
//              search-form
//
//           ***elemento***
//           -Un elemento siempre es parte de un bloque y no debe usarlo por separado del bloque.
//           -Un elemento es un componente de bloque opcional. No todos los bloques tienen elementos.
//           -La estructura del nombre completo de un elemento es 
//            block-name__element-name
//            ejem:menu__item
//           -Una parte compuesta de un bloque que no se puede usar por separado
//           -Crea un elemento:
//            Si una sección de código no se puede usar por separado sin la entidad principal (el bloque).
//
//           ***mdificador***
//           - Se usa cuando el valor del modificador es importante. Por ejemplo, "un menú con el islandstema de diseño":
//              menu_theme_islands.
//           - La estructura del nombre completo del modificador sigue el patrón:
//              block-name_modifier-name_modifier-value  (_ separa el block-name del modificador)
//              block-name__element-name_modifier-name_modifier-value (_ separa el elemento-name del modificador)
//
//           - Un modificador no se puede usar solo
//             Desde la perspectiva de BEM, un modificador no se puede utilizar de forma aislada del bloque o elemento modificado.
//             Un modificador debe cambiar la apariencia, el comportamiento o el estado de la entidad, no reemplazarlo.
//
//           ***mescla***
//           - es la accion de poner mas de un valor al class 
//           - class="search-form header__search-form header__search-form_color_blue "
//                     block              elemento                modificador
//
//         *************nombres para las class**************---------------------------------------------------------------
//
//        -segun su función(en el archivo)- segun su contenido(el contenido le vuelve en algo...)-segun su presentación(la razon de su presentación)
//        --box
//        --menu
//        --item
//        --content
//        --
//
//        -heder-aside-article-footer-
//         *NOTA: section  NO porque es muy general(hay section de muchas cosas; comentarios,articulos,etc...)
//
//        -header: cabezera(el encabezamiento)
//        -head: cabeza
//        -heading: titulo,boveda,menbrete
//        -page= pagina
//        -main: principal
//        -layout: diseño  (se pone para distinguir el diseño del contenido)
//        -promo= la promocion,invitacion ala pagina
//        -search: busqueda(para iconos o seccion de busqueda)
//        -submit: enviar (se usa en algun boton para enviar algun tipo de mensaje o busqueda, etc)
//        -
//        -
//        -
//        -
//        -
//        -
//        -
//
//
//
//   ***nota: el problema del selector css como const en js es por que es const no selector. 
//            el selector se puede seleccionar ClassName()
//
//
//
//
//
//
//
//