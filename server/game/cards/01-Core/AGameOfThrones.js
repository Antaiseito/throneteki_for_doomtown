const PlotCard = require('../../plotcard.js');

class AGameOfThrones extends PlotCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            // Add an explicit recalculate event here to ensure the effect is
            // recalculated properly. This is pretty hacky.
            recalculateWhen: ['afterChallenge'],
            targetType: 'player',
            targetController: 'any',
            match: player => player.getNumberOfChallengesWon('intrigue') < 1,
            effect: [
                ability.effects.cannotInitiateChallengeType('military'),
                ability.effects.cannotInitiateChallengeType('power')
            ]
        });
    }
}

AGameOfThrones.code = '01003';

module.exports = AGameOfThrones;
