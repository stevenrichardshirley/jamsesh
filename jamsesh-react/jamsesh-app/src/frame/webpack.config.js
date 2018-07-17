import css from  '.\frame.css'

module.exports = {
    module: {
        rules: [
            {
                test: /\frame.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
export default webpackConfig