module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        //Header
    	f.addIf($.find('h2').first(), 'model.showtitle == \'true\'')
        f.mapRichField($.find('h2').first(), "model.title")
        f.addFor($.find('div>div').first(), 'model.accordiontoggle')

        //Content Container
        let contentDiv = $.find('div>div')
        f.bindAttribute(  contentDiv,  'class', "model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'", false)

        //Media
        let mediaDiv  = contentDiv.find('div').first()
        f.addIf( mediaDiv, "model.showmedia === 'true'")
        f.bindAttribute( mediaDiv, 'style', "{width:`${model.mediawidth}%`}")
        f.replace( mediaDiv.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')

        //Accordion Container
        let accordionContainer = $.find('div:nth-child(1)').eq(1)
        // f.bindAttribute( accordionContainer, 'id', "model.toggletype === 'accordion' ? `accordion${_uid}` : ''")
        f.bindAttribute( accordionContainer, 'id', "`accordion${_uid}`")

        //Accordion Item Title Bar
        let a = $.find('a').first()
        let aClasses = `{
            'text-light': model.colorscheme === 'dark',
            'text-dark': model.colorscheme === 'light',
        }`
        f.bindAttribute( a, 'data-parent', "model.toggletype === 'accordion' ? `#accordion${_uid}` : ''")
        f.bindAttribute( a, 'href', '`#accordion${_uid}${i}`')
        f.bindAttribute( a, 'aria-controls', '`accordion${_uid}${i}`')
        f.mapRichField( a.find('h4'), "item.title")

        //Acocordion Item Body
        f.bindAttribute($.find('div.collapse').first(), 'id', '`accordion${_uid}${i}`')
        f.mapRichField($.find('div.card-body').first(), "item.text")

        f.addIf($.find('.perIsEditAndEmpty').first(), 'isEditAndEmpty')
    }
}
