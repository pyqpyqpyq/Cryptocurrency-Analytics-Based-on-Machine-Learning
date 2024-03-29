import gc
import plotly
import plotly.graph_objs as go
from sklearn import neighbors
from sklearn.model_selection import GridSearchCV
from sklearn.preprocessing import MinMaxScaler
from os import sys
sys.path.append('..')
from model import useful_function
import threading
from fastai.structured import *
gc.enable()


class KNNModel(threading.Thread):
    def __init__(self, data, logging):
        threading.Thread.__init__(self)
        self.data = data
        self.logging = logging
        self.valid = 0.2
        self.length = 0
        self.rmse = {}
        self.info = {}

    def run(self):
        total = {}
        data = self.data
        data['timestamp'] = pd.to_datetime(data.index, format='%Y-%m-%d')
        data.index = data['timestamp']
        data['Date'] = data.index

        # sorting
        data = data.sort_index(ascending=True, axis=0)

        # creating a separate dataset
        new_data = pd.DataFrame(index=range(0, len(data)), columns=['Date', 'Close'])

        for i in range(0, len(data)):
            new_data['Date'][i] = data['Date'][i]
            new_data['Close'][i] = data['Close'][i]
        add_datepart(new_data, 'Date')
        new_data.drop('Elapsed', axis=1, inplace=True)
        new_data['mon_fri'] = 0
        print(new_data)
        def check(date):
            if date == 0 or date == 4:
                return 1
            return 0

        new_data['mon_fri'] = new_data['Dayofweek'].apply(lambda row: check(row))
        new_data.index = data['timestamp']
        data1 = new_data.copy()
        new_data['neg'] = data['Isneg']
        new_data['pos'] = data['Ispos']
        data2 = new_data.copy()
        new_data['Gneg'] = data['GovIsneg']
        new_data['Gpos'] = data['GovIspos']
        self.length = int(len(new_data) * (1 - self.valid))
        train_ = new_data
        valid = new_data[self.length:]
        x_train = train_.drop('Close', axis=1)
        y_train = train_['Close']
        x_valid = valid.drop('Close', axis=1)
        y_valid = valid['Close']

        scaler = MinMaxScaler(feature_range=(0, 1))
        x_train_scaled = scaler.fit_transform(x_train)
        x_train = pd.DataFrame(x_train_scaled)
        x_valid_scaled = scaler.fit_transform(x_valid)
        x_valid = pd.DataFrame(x_valid_scaled)
        self.logging.info('KNN')
        params = {'n_neighbors': [2, 3, 4, 5, 6, 7, 8, 9]}
        knn = neighbors.KNeighborsRegressor()
        model1 = GridSearchCV(knn, params, cv=5)
        model1.fit(x_train, y_train)
        preds = model1.predict(x_valid)
        rms_linear = np.sqrt(np.mean(np.power((np.array(y_valid) - np.array(preds)), 2)))
        self.logging.info('RMSE value on validation set with +/- and Government: {}.'.format(rms_linear))
        print('RMSE value on validation set with +/- KNN:')
        print(rms_linear)
        MAPE = np.mean(np.abs(np.array(y_valid) - np.array(preds) / np.array(y_valid)))
        self.logging.info('MAPE value on validation set with +/- and Government: {}.'.format(MAPE))
        print('MAPE value on validation set with +/-:')
        print(MAPE)
        valid['Predict_Twitter'] = preds
        self.rmse[rms_linear] = x_train, y_train, model1, new_data
        t = []
        t.append(rms_linear)
        t.append(MAPE)
        total['GT'] = t


        train1 = data1
        valid1 = data1[self.length:]
        x_train1 = train1.drop('Close', axis=1)
        y_train1 = train1['Close']
        x_valid1 = valid1.drop('Close', axis=1)
        y_valid1 = valid1['Close']

        x_train_scaled1 = scaler.fit_transform(x_train1)
        x_train1 = pd.DataFrame(x_train_scaled1)
        x_valid_scaled1 = scaler.fit_transform(x_valid1)
        x_valid1 = pd.DataFrame(x_valid_scaled1)
        model2 = GridSearchCV(knn, params, cv=5)
        model2.fit(x_train1, y_train1)
        preds1 = model2.predict(x_valid1)
        rms_linear1 = np.sqrt(np.mean(np.power((np.array(y_valid1) - np.array(preds1)), 2)))
        self.logging.info('RMSE value on validation set: {}.'.format(rms_linear1))
        print('\n RMSE value on validation set KNN:')
        print(rms_linear1)
        MAPE1 = np.mean(np.abs(np.array(y_valid1) - np.array(preds1) / np.array(y_valid1)))
        self.logging.info('MAPE value on validation set: {}.'.format(MAPE1))
        print('MAPE value on validation set:')
        print(MAPE1)
        valid1['Predict_Twitter'] = preds1
        self.rmse[rms_linear1] = x_train1, y_train1, model2, data1
        t1 = []
        t1.append(rms_linear1)
        t1.append(MAPE1)
        total['N'] = t1

        train2 = data2
        valid2 = data2[self.length:]
        x_train2 = train2.drop('Close', axis=1)
        y_train2 = train2['Close']
        x_valid2 = valid2.drop('Close', axis=1)
        y_valid2 = valid2['Close']

        x_train_scaled2 = scaler.fit_transform(x_train2)
        x_train2 = pd.DataFrame(x_train_scaled2)
        x_valid_scaled2 = scaler.fit_transform(x_valid2)
        x_valid2 = pd.DataFrame(x_valid_scaled2)
        model3 = GridSearchCV(knn, params, cv=5)
        model3.fit(x_train2, y_train2)
        preds2 = model3.predict(x_valid2)
        rms_linear2 = np.sqrt(np.mean(np.power((np.array(y_valid2) - np.array(preds2)), 2)))
        self.logging.info('RMSE value on validation set with +/-: {}.'.format(rms_linear2))
        print('\n RMSE value on validation set KNN:')
        print(rms_linear2)
        MAPE2 = np.mean(np.abs(np.array(y_valid2) - np.array(preds2) / np.array(y_valid2)))
        self.logging.info('MAPE value on validation set with +/-: {}.'.format(MAPE2))
        print('MAPE value on validation set:')
        print(MAPE2)
        valid2['Predict_Twitter'] = preds2
        self.rmse[rms_linear1] = x_train2, y_train2, model3, data2
        t2 = []
        t2.append(rms_linear2)
        t2.append(MAPE2)
        total['T'] = t2

        valid.index = data[self.length:].index
        valid1.index = data[self.length:].index
        train_.index = data.index
        train1.index = data.index

        index = min(self.rmse.keys())
        # print(self.rmse.get(index))
        newx_train, newy_train, new_model, newd = self.rmse.get(index)

        stdev = np.sqrt(sum((new_model.predict(newx_train) - newy_train) ** 2) / (len(newy_train) - 2))
        # print(stdev)
        predict = useful_function.FunctionalTools.predict(365, new_model, stdev, newd, 'K')
        fig = useful_function.FunctionalTools.plot_intervals(predict)

        fig1 = useful_function.FunctionalTools.evaluate('KNN with Twitter and Government\n RMSE: \t', rms_linear, train_,
                                        valid, valid, index, fig)
        with open('../JSON/KNNTwitterGovernment.json', 'w') as outfile:
            json.dump(fig1, outfile, cls=plotly.utils.PlotlyJSONEncoder)

        fig2 = useful_function.FunctionalTools.evaluate('KNN \n RMSE: \t', rms_linear1, train_, valid, valid1, index, fig)
        with open('../JSON/KNN.json', 'w') as outfile:
            json.dump(fig2, outfile, cls=plotly.utils.PlotlyJSONEncoder)

        fig3 = useful_function.FunctionalTools.evaluate('KNN with Twitter \n RMSE: \t', rms_linear2, train_, valid,
                                        valid2, index, fig)
        with open('../JSON/KNNTwitter.json', 'w') as outfile:
            json.dump(fig3, outfile, cls=plotly.utils.PlotlyJSONEncoder)
        self.info['KNN']=total

        self.logging.info('KNN Models have been saved!')

        gc.collect()

    def join(self, *args):
        threading.Thread.join(self, *args)
        return self.info






