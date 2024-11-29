

import React, { createElement } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function Button({ size, children }) {
    return createElement('button', {
        className: classNames("bg-[#1d9bf0] rounded-full font-bold flex items-center justify-center hover:bg-[#1a8cd8] transitions-colors ",{
            "px-4 h-9": size === 'normal',
            "px-4 h-[52px] text-[17px] w-full": size === 'large'
        })
    },children)
}
Button.propTypes = {
    size: PropTypes.oneOf(['normal', 'size'])
}

Button.defaultProps = {
    size:'normal'
}

